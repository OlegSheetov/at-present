import React from "react";
import { useNavigate } from "react-router-dom";
import "./Create_Event.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRef } from "react";

export default function Create_Event() {
    const store = useSelector((state) => state.data);
    const Navigate = useNavigate("/");
    const dispatch = useDispatch();
        const HeaderRef = useRef();
    const DescriptionRef = useRef();
    const DateRef = useRef();

    function postEvent() {
        const localState = {
            title: HeaderRef.current.value,
            description: DescriptionRef.current.value,
            date: DateRef.current.value,
            key: 0,
        };
        const KeyDate = new Date();
        localState.key = KeyDate.getTime();
        console.log(localState.key);
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
                    ref={HeaderRef}
                />
                <textarea
                    className="Create_Event_Inputs_Description"
                    type="text"
                    placeholder="desctiption"
                    ref={DescriptionRef}
                />
                <p>End of Event</p>
                <input
                    className="Create_Event_Inputs_DataTime"
                    type="datetime-local"
                    ref={DateRef}
                />
                <input
                    className="Create_Event_Inputs_CreateButton"
                    type="button"
                    value="create"
                    onClick={postEvent}
                />
            </div>
        </section>
    );
}
