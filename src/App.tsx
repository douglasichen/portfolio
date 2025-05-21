import React, { useEffect, useRef, useState } from "react";
import "./App.scss";
import ExperienceList from "./components/experience";

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
        const leftPane = leftPaneRef.current;
        const rightPane = rightPaneRef.current;

        if (!leftPane || !rightPane) {
            return;
        }

        const handleUniversalWheelOnLeftPane = (event: WheelEvent) => {
            // Prevent the left pane itself from scrolling (e.g. elastic scroll on macOS or if content overflows)
            event.preventDefault();

            if (isMobileView) {
                // On mobile, the "leftPane" is the top bar.
                // Scrolling (e.g., via touch translated to wheel) on it should scroll the main window content.
                window.scrollBy(0, event.deltaY);
            } else {
                // On desktop, scroll the right pane.
                rightPane.scrollTop += event.deltaY;
            }
        };

        // Attach a single wheel listener to the left pane.
        // Using { passive: false } if we intend to use event.preventDefault() inside the handler.
        // If event.preventDefault() is not used, { passive: true } can be slightly more performant.
        // Now that we are using preventDefault, passive must be false.
        leftPane.addEventListener("wheel", handleUniversalWheelOnLeftPane, { passive: false });

        return () => {
            leftPane.removeEventListener("wheel", handleUniversalWheelOnLeftPane);
        };
    }, [isMobileView, leftPaneRef, rightPaneRef]); // Added refs to dependency array for correctness

    return (
        <div className="layout">
            <div className="content">
                <div className="pane-container">
                    <div className="left-pane" ref={leftPaneRef}>
                        <h1>Douglas Chen</h1>
                        <h2>Back End Engineer</h2>
                        <p>I love solving problems</p>
                    </div>
                    <div className="right-pane" ref={rightPaneRef}>
                        <ExperienceList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
