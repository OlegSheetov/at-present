import React from "react";
import { useNavigate } from "react-router-dom";
import "./Create_Event.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const localState = {
    title: "",
    description: "",
    date: "",
    key: 0,
};

function handleHeader(event) {
    localState.title = event.target.value;
}

function handleDescription(event) {
    localState.description = event.target.value;
}

function handleDate(event) {
    localState.date = event.target.value;
}

export default function Create_Event() {
    const store = useSelector((state) => state.data);
    const Navigate = useNavigate("/");
    const dispatch = useDispatch();

    function postEvent() {
        const key = new Date();
        localState.key = key;
        dispatch({ type: "At-present/add", payload: localState });
        Navigate("/");
    }

    return (
        <section className="Create_Event_plate">
            <div className="Create_Event_Inputs">
                <h1>Create your event.</h1>
                <textarea
                    className="Create_Event_Inputs_Header"
                    type="text"
                    placeholder="Header"
                    onChange={handleHeader}
                />
                <textarea
                    className="Create_Event_Inputs_Description"
                    type="text"
                    placeholder="desctiption"
                    onChange={handleDescription}
                />
                <input
                    className="Create_Event_Inputs_DataTime"
                    type="datetime-local"
                    onChange={handleDate}
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
