import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

// Это просто костыль. С помощью этого кода поставил ключ и дату
const Date2 = new Date("2023-12-31T21:00");
const D2 = Date2.getTime();
const Date3 = new Date("Jan 01 , 2023");
const D3 = Date3.getTime();

let initialData = {
    data: [
        {
            title: "NewYear23",
            description: "description",
            startTime: String("00:00"),
            date: Date2,
            key: D2,
            timeSpended: Number(),
        },
    ],
    reports: [
        {
            title: "Hello dear user",
            text: "I hope you enjoy this app and find it useful. And I assume you have no problem using.",
            date: Date3,
            Notekey: D3,
        },
    ],
};

function rootReducer(state, action) {
    let newData;
    let newNote;
    switch (action.type) {
        case "At-present/add":
            newData = [...state.data];
            newData.push(action.payload);
            return { ...state, data: newData };
        case "At-present/delete":
            // Event delete code
            const index = state.data.indexOf(action.payload);
            state.data.splice(index, 1);
            return { ...state };
        case "At-present/change":
            // change code
            const deed = state.data.find((current) => {
                return current.key === Number(action.payload.key);
            });
            deed.title = action.payload.title;
            deed.description = action.payload.description;
            deed.date = new Date(action.payload.date);
            deed.startTime = action.payload.startTime;
            return { ...state };
        case "At-present/NoteAdd":
            state.reports.push(action.payload);
            return { ...state };
        case "At-present/NoteDelete":
            //delete note code
            const note = state.reports.find((current) => {
                return current.Notekey === Number(action.payload);
            });
            const Noteindex = state.reports.indexOf(note);
            state.reports.splice(Noteindex, 1);
            return { ...state };
        case "At-present/NoteChange":
            //change note code
            const Note = state.reports.find((current) => {
                return current.Notekey === Number(action.payload.key);
            });
            Note.title = action.payload.title;
            Note.text = action.payload.text;
            return { ...state };
        default:
            return state;
    }
}
if (localStorage.redux != null) {
    initialData = JSON.parse(localStorage.getItem("redux"));
}
const store = createStore(rootReducer, initialData);
store.subscribe(() => {
    localStorage.setItem("redux", JSON.stringify(store.getState()));
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
