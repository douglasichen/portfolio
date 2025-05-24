import React, { useEffect, useState } from "react";
import "./ScrollToTopButton.scss";

interface ScrollToTopButtonProps {
    rightPaneRef?: React.RefObject<HTMLDivElement | null>;
    isMobileView: boolean;
    isCardExpanded?: boolean;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
    rightPaneRef,
    isMobileView,
    isCardExpanded = false,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            let scrollTop = 0;

            if (isMobileView) {
                // On mobile, we scroll the window
                scrollTop = window.scrollY;
            } else {
                // On desktop, we scroll the right pane
                if (rightPaneRef?.current) {
                    scrollTop = rightPaneRef.current.scrollTop;
                }
            }

            // Show button when scrolled down more than 300px (approximately past about me section)
            setIsVisible(scrollTop > 300);
        };

        let scrollElement: Element | Window = window;

        if (!isMobileView && rightPaneRef?.current) {
            scrollElement = rightPaneRef.current;
        }

        scrollElement.addEventListener("scroll", handleScroll);
        handleScroll(); // Check initial state

        return () => {
            scrollElement.removeEventListener("scroll", handleScroll);
        };
    }, [rightPaneRef, isMobileView]);

    const scrollToTop = () => {
        if (isMobileView) {
            // On mobile, scroll the window
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            // On desktop, scroll the right pane
            if (rightPaneRef?.current) {
                rightPaneRef.current.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <button
            className={`scroll-to-top-button ${
                isVisible && !isCardExpanded ? "visible" : ""
            }`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 4L4 12H8V20H16V12H20L12 4Z"
                    fill="currentColor"
                />
            </svg>
        </button>
    );
};

export default ScrollToTopButton;
