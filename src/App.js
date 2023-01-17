import React, { Component } from "react";
import "./App.css";
import { HashRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import Event_Task from "./components/Event_Task/Event_Task";
import Create_Event from "./components/Create_Event/Create_Event";
import Note_Report from "./components/Note_Report/Note_Report";
import Component_Detail from "./components/Component_Detail/Component_Detail";
import ReportList from "./components/ReportList/ReportList";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <div className="App_Navbar">
                        <Link className="App_Navbar_Link_Back" to="/">
                            &#127968;
                        </Link>
                        <Link to="/Create_Event">
                            <input
                                className="App_Navbar_Plus_Button"
                                type="button"
                                value="+"
                            />
                        </Link>
                        <Link
                            className="App_Navbar_Link_Note_Report"
                            to="/ReportList"
                        >
                            &#128214;
                        </Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<Event_Task />}></Route>
                        <Route
                            path="/Create_Event"
                            element={<Create_Event />}
                        />
                        <Route path="/Note_Report" element={<Note_Report />} />
                        <Route
                            path="/:key"
                            element={<Component_Detail />}
                        ></Route>
                        <Route
                            path="/ReportList"
                            element={<ReportList />}
                        ></Route>
                    </Routes>
                </div>
            </HashRouter>
        );
    }
}

export default App;
