import React from "react";
import { useNavigate } from "react-router-dom";
import "./Create_Event.css";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import CreateIcon from '../../UI/plus-square.svg'

export default function Create_Event() {
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const HeaderRef = useRef();
    const DescriptionRef = useRef();
    const DateRef = useRef();
    const StartTimeRef = useRef();

    function postEvent() {
        const localState = {
            title: HeaderRef.current.value,
            description: DescriptionRef.current.value,
            startTime: StartTimeRef.current.value,
            date: 0,
            key: 0,
        };
        // Простой способ затолкать дату в обьект
        localState.date = new Date(DateRef.current.value);
        localState.key = localState.date.getTime();
        dispatch({ type: "At-present/add", payload: localState });
        Navigate("/");
    }
    return (
        <section className="Create_Event_plate">
            <div className="Create_Event_Inputs">
                <textarea
                    className="Create_Event_Inputs_Header"
                    type="text"
                    placeholder="Header"
                    defaultValue="Title"
                    ref={HeaderRef}
                />
                <textarea
                    className="Create_Event_Inputs_Description"
                    type="text"
                    placeholder="desctiption"
                    defaultValue="Description"
                    ref={DescriptionRef}
                />
                <p>Start time (Time when you start this task everyday):</p>
                <input
                    className="Create_Event_Inputs_StartTime"
                    type="time"
                    defaultValue="11:00"
                    ref={StartTimeRef}
                />

                <p>End of Event</p>
                <input
                    className="Create_Event_Inputs_DataTime"
                    type="datetime-local"
                    defaultValue="2024-12-31T00:00"
                    ref={DateRef}
                />
                <img
                    className="Create_Event_Inputs_CreateButton"
                    src={CreateIcon}
                    onClick={postEvent}
                />
            </div>
        </section>
    );
}
