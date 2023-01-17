import React from "react";
import "./Note_Report.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Note_Report() {
    function PostNote() {
        const TitleRef = useRef();
        const TextRef = useRef();
        const dispatch = useDispatch();
        const Navigate = useNavigate()
        const Today = new Date();
        const LocalState = {
            title: TitleRef.current.data,
            text: TextRef.current.data,
            date: Today,
            key: Today.getTime(),
        };
        dispatch({ type: "At-present/NoteAdd", payload: localState });
        Navigate("/");
    }

    return (
        <section className="Note_Report_Plate">
            <h1 className="Header">Create your note/report</h1>
            <textarea
                type="text"
                className="Note_Report_Plate_Title"
                placeholder="Title"
            />
            <textarea
                className="Note_Report_Plate_Text"
                placeholder="text"
            ></textarea>
            <input
                className="Note_Report_Plate_CreateButton"
                type="button"
                value="Create Note/Report"
            />
        </section>
    );
}
