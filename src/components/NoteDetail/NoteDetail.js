import React from "react";
import "./NoteDetail.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
export default function NoteDetail() {
    const dispatch = useDispatch();
    let { Notekey } = useParams();
    const Note = useSelector((state) => {
        return state.reports.find(
            (current) => current.Notekey === Number(Notekey)
        );
    });
    console.log(" Запили изменение содержимого записи на onChange  ");
    return (
        <section className="NoteDetailPlate">
            <input
                className="NoteDetailTitle"
                type="text"
                defaultValue={Note.title}
            ></input>
            <textarea
                className="NoteDetailText"
                type="text"
                defaultValue={Note.text}
            ></textarea>
            <input
                className="NoteDetailChangeButton"
                type="button"
                value="Change"
            />
        </section>
    );
}
