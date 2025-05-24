import { useEffect, useRef, useState } from "react";
import "./App.scss";
import ExperienceList from "./components/experience";
import { AboutMe } from "./components/about";
import { ContactLinks } from "./components/contact";
import { Footer } from "./components/footer";
import { ResumeButton } from "./components/resume";
import { ScrollToTopButton } from "./components/scrollToTop";

const MOBILE_VIEW_THRESHOLD = 1050; // from App.scss

function App() {
    const leftPaneRef = useRef<HTMLDivElement>(null);
    const rightPaneRef = useRef<HTMLDivElement>(null);
    // touchStartYRef is removed
    const [isMobileView, setIsMobileView] = useState(
        window.innerWidth <= MOBILE_VIEW_THRESHOLD,
    );

    useEffect(() => {
        const checkMobileView = () => {
            setIsMobileView(window.innerWidth <= MOBILE_VIEW_THRESHOLD);
        };

        window.addEventListener("resize", checkMobileView);
        checkMobileView(); // Initial check

        return () => {
            window.removeEventListener("resize", checkMobileView);
        };
    }, []);

    useEffect(() => {
        const rightPane = rightPaneRef.current;
        const leftPane = leftPaneRef.current; // For mobile check: is event on top bar?

        // If rightPane isn't there, we can't scroll it.
        if (!rightPane) {
            return;
        }

        const handleGlobalWheelScroll = (event: WheelEvent) => {
            if (isMobileView) {
                // On mobile, scroll the main window.
                // If the event originated on the top bar (leftPane), prevent its default scroll behavior
                // to ensure the window scrolls instead of an elastic scroll on the bar itself.
                if (leftPane && leftPane.contains(event.target as Node)) {
                    event.preventDefault();
                }
                window.scrollBy(0, event.deltaY);
            } else { // Desktop view
                // Check if the event originated within the right pane or its children
                const isTargetInRightPane = rightPane.contains(
                    event.target as Node,
                );

                if (!isTargetInRightPane) {
                    // If the scroll event is outside the right pane (e.g., on left pane, or body),
                    // prevent default action (like scrolling the body or an elastic scroll on left pane)
                    // and redirect the scroll to the right pane.
                    event.preventDefault();
                    rightPane.scrollTop += event.deltaY;
                }
                // If the scroll event is inside the right pane, do nothing.
                // Let the browser handle native scrolling for the right pane if it's scrollable.
            }
        };

        // Attach listener to the document to capture all wheel events
        // { passive: false } is crucial because we call event.preventDefault().
        document.addEventListener("wheel", handleGlobalWheelScroll, {
            passive: false,
        });

        return () => {
            document.removeEventListener("wheel", handleGlobalWheelScroll);
        };
    }, [isMobileView, rightPaneRef, leftPaneRef]); // Dependencies: isMobileView, and refs for panes

    return (
        <div className="layout">
            <div className="content">
                <div className="pane-container">
                    <div className="left-pane" ref={leftPaneRef}>
                        <h1>Douglas Chen</h1>
                        <h2>Software Engineer</h2>
                        <p>Computer Science @ UBC</p>
                        <ResumeButton />
                        <div className="mobile-resume-contact-container">
                            <ResumeButton />
                            <ContactLinks />
                        </div>
                        <ContactLinks />
                    </div>
                    <div className="right-pane" ref={rightPaneRef}>
                        <AboutMe />
                        <ExperienceList />
                        <Footer />
                    </div>
                </div>
            </div>
            <ScrollToTopButton 
                rightPaneRef={rightPaneRef} 
                isMobileView={isMobileView} 
            />
        </div>
    );
}

export default App;
