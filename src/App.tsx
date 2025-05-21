import React, { useEffect, useRef } from "react";
import "./App.scss";
import ExperienceList from "./components/experience";

function App() {
    const leftPaneRef = useRef<HTMLDivElement>(null);
    const rightPaneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const leftPane = leftPaneRef.current;
        const rightPane = rightPaneRef.current;

        if (!leftPane || !rightPane) {
            return;
        }

        const handleLeftPaneWheel = (event: WheelEvent) => {
            // event.preventDefault(); // Prevent left pane from scrolling itself.
            // event.stopPropagation(); // Prevent this event from bubbling to the document listener.
            rightPane.scrollTop += event.deltaY;
        };

        const handleDocumentWheel = (event: WheelEvent) => {
            const target = event.target as Node;

            // If the event originated from within the right pane, let its native scroll behavior occur.
            if (rightPane.contains(target)) {
                return; 
            }

            // For any other scroll event (not on right pane, and not on left pane because that's stopped),
            // prevent its default action and scroll the right pane.
            event.preventDefault(); 
            rightPane.scrollTop += event.deltaY;
        };

        // Attach listener to the left pane.
        // { passive: false } is crucial for preventDefault() to work.
        leftPane.addEventListener('wheel', handleLeftPaneWheel, { passive: false });

        // Attach listener to the document's root element.
        // This will catch wheel events that bubble up from elements not handled above.
        document.documentElement.addEventListener('wheel', handleDocumentWheel, { passive: false });

        return () => {
            leftPane.removeEventListener('wheel', handleLeftPaneWheel);
            document.documentElement.removeEventListener('wheel', handleDocumentWheel);
        };
    }, []);

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
