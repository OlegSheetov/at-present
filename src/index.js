import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

// Это просто костыль. С помощью этого кода поставил ключ и дату
const Date1 = new Date("2023-01-31T12:54" );
const Date2 = new Date("2023-12-31T21:00");
const D1 = Date1.getTime();
const D2 = Date2.getTime();
const Date3 = new Date("Jun 30 , 2023");
const Date4 = new Date("Jun 2 , 2024");
const D3 = Date3.getTime();
const D4 = Date4.getTime();

const initialData = {
    data: [
        {
            title: "title1",
            description: "description",
            startTime: String('10:00'),
            date: Date1,
            key: D1,
            timeSpended: Number()
        },
        {
            title: "NewYear23",
            description: "description",
            startTime: String('00:00'),
            date: Date2,
            key: D2,
            timeSpended: Number()
        },
    ],
    reports: [
        {
            title: "Note1",
            text: "text",
            date: Date3,
            Notekey: D3,
        },
        {
            title: "Note2",
            text: "text",
            date: Date4,
            Notekey: D4,
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
        case "At-present/NoteAdd":
            state.reports.push(action.payload);
            return { ...state };
        default:
            return state;
    }
}

const store = createStore(rootReducer, initialData);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
