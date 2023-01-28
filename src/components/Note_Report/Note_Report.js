import React from "react";
import "./Note_Report.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import create from '../../UI/plus-square.svg'
export default function Note_Report() {
    const TitleRef = useRef();
    const TextRef = useRef();
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    function PostNote() {
        const Today = new Date();
        const LocalState = {
            title: TitleRef.current.value,
            text: TextRef.current.value,
            date: Today,
            Notekey: Today.getTime(),
        };
        dispatch({ type: "At-present/NoteAdd", payload: LocalState });
        Navigate("/ReportList");
    }

    return (
        <section className="Note_Report_Plate">
            <h1 className="Header">Create your note/report</h1>
            <input
                type="text"
                className="Note_Report_Plate_Title"
                placeholder="Title"
                ref={TitleRef}
                defaultValue="Note"
            />
            <textarea
                className="Note_Report_Plate_Text"
                placeholder="text"
                ref={TextRef}
                defaultValue="Text"
            ></textarea>
            <img
                className="Note_Report_Plate_CreateButton"
                onClick={PostNote}
                src={create}
            />
        </section>
    );
}
