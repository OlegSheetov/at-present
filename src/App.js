import React, { Component } from "react";
import "./App.css";
import { HashRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import Event_Task from "./components/Event_Task/Event_Task";
import Create_Event from "./components/Create_Event/Create_Event";
import Note_Report from "./components/Note_Report/Note_Report";
import Event_detail from "./components/Event_detail/Event_detail";
import ReportList from "./components/ReportList/ReportList";
import NoteDetail from "./components/NoteDetail/NoteDetail";
import home from "./UI/House.svg";
import note from "./UI/BookOpen.svg";
import settings from "./UI/settings.svg";
import RemoveSavedData from './UI/trash-2.svg'
class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <div className="App_Navbar">
                        <Link className="App_Navbar_Link_Back" to="/">
                            <img src={home} alt="back" />
                        </Link>
                        <Link
                            className="App_Navbar_Link_Note_Report"
                            to="/ReportList"
                        >
                            <img src={note} alt="note" />
                        </Link>
                        <img src={RemoveSavedData} alt="RemoveSavedData" onClick={()=>{localStorage.removeItem('redux')}}/>
                    </div>
                    <Routes>
                        <Route path="/" element={<Event_Task />}></Route>
                        <Route
                            path="/Create_Event"
                            element={<Create_Event />}
                        />
                        <Route path="/Note_Report" element={<Note_Report />} />
                        <Route path="/:key" element={<Event_detail />}></Route>
                        <Route
                            path="/ReportList"
                            element={<ReportList />}
                        ></Route>
                        <Route
                            path="/ReportList/:Notekey"
                            element={<NoteDetail />}
                        ></Route>
                    </Routes>
                </div>
            </HashRouter>
        );
    }
}

export default App;
