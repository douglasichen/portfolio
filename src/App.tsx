import React from "react";
import "./App.scss";
import ExperienceList from "./components/experience";

function App() {
    return (
        <div className="layout">
            <div className="content">
                <div className="pane-container">
                    <div className="left-pane">
                        <h1>Douglas Chen</h1>
                        <h2>Back End Engineer</h2>
                        <p>I love solving problems</p>
                    </div>
                    <div className="right-pane">
                        <ExperienceList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
