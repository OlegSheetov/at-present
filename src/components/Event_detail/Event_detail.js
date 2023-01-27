import React from "react";
import { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Event_detail.css";
import EditIcon from '../../UI/edit.svg'
import DeleteIcon from '../../UI/trash-2.svg'

export default function Event_detail() {
    let { key } = useParams();
    const deed = useSelector((state) => {
        return state.data.find((current) => current.key === Number(key));
    });
    const store = useSelector((state) => state.data);
    const Navigate = useNavigate();
    const DeedTitleRef = useRef();
    const DeedDescriptionRef = useRef();
    const DeedDateRef = useRef();
    const StartTimeRef = useRef();
    function ChangeEvent() {
        deed.title = DeedTitleRef.current.value;
        deed.description = DeedDescriptionRef.current.value;
        deed.date = new Date(DeedDateRef.current.value);
        deed.startTime = StartTimeRef.current.value;
        Navigate("/");
        alert("Event was changed");
    }
    function DeleteEvent() {
        const index = store.indexOf(deed);
        store.splice(index, 1);
        Navigate("/");
        alert("Event was deleted");
    }
    return (
        <section className="EventDetail">
            <input
                type="text"
                className="EventDetailTitle"
                defaultValue={deed.title}
                ref={DeedTitleRef}
            ></input>
            <textarea
                className="EventDetailDescription"
                defaultValue={deed.description}
                ref={DeedDescriptionRef}
            ></textarea>
            <p className="EventDetailSpendedTime">
                Spended Time(Hours): {String(deed.timeSpended)}
            </p>
            <div className="EventDetailStartTimePlate">
                <p>Start Time : </p>
                <input
                    className="EventDetailStartTime"
                    type="time"
                    defaultValue={deed.startTime}
                    ref={StartTimeRef}
                />
            </div>
            <p className="EventDetailDate">Current date: {String(deed.date)}</p>
            <input
                className="EventDetailDate"
                type="datetime-local"
                ref={DeedDateRef}
                defaultValue={deed.date.toISOString().replace(".000Z", "")}
            />
            <div className="EventDetailInputs">
                <img
                    className="EventDetailChangeButton"
                    src={EditIcon}
                    onClick={ChangeEvent}
                />
                <img
                    className="EventDetailDeleteButton"
                    src={DeleteIcon}
                    onClick={DeleteEvent}
                />
            </div>
        </section>
    );
}
