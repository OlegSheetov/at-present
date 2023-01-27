import React from "react";
import "./NoteDetail.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useRef } from "react";
import EditIcon from '../../UI/edit.svg'
import DeleteIcon from '../../UI/trash-2.svg'
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
                <img
                    className="NoteDetailChangeButton"
                    src={EditIcon}
                    onClick={ChangeNote}
                />
                <img
                    className="NoteDeleteButton"
                    src={DeleteIcon}
                    onClick={DeleteNote}
                />
            </div>
        </section>
    );
}
