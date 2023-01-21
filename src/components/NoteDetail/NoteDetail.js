import React from "react";
import "./NoteDetail.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useRef } from "react";
export default function NoteDetail() {
    const dispatch = useDispatch();
    let { Notekey } = useParams();
    const Navigate = useNavigate();
    const Note = useSelector((state) => {
        return state.reports.find(
            (current) => current.Notekey === Number(Notekey)
        );
    });
    const store = useSelector((state) => state.reports);
    const NoteTitleRef = useRef();
    const NoteTextRef = useRef();
    function ChangeNote() {
        Note.title = NoteTitleRef.current.value;
        Note.text = NoteTextRef.current.value;
        Navigate("/ReportList");
        alert("Note was changed.");
    }
    function DeleteNote() {
        const index = store.indexOf(Note);
        store.splice(index, 1);
        Navigate("/ReportList");
        alert("Note was deleted.");
    }

    return (
        <section className="NoteDetailPlate">
            <input
                className="NoteDetailTitle"
                type="text"
                defaultValue={Note.title}
                ref={NoteTitleRef}
            ></input>
            <textarea
                className="NoteDetailText"
                type="text"
                defaultValue={Note.text}
                ref={NoteTextRef}
            ></textarea>
            <div className="NoteDetailInputs">
                <input
                    className="NoteDetailChangeButton"
                    type="button"
                    value="Change"
                    onClick={ChangeNote}
                />
                <input
                    className="NoteDeleteButton"
                    type="button"
                    value="delete"
                    onClick={DeleteNote}
                />
            </div>
        </section>
    );
}
