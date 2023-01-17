import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

// Это просто костыль. С помощью этого кода поставил ключ и дату
const Date1 = new Date("Jan 31 , 2023");
const Date2 = new Date("Jan 2 , 2024");
const D1 = Date1.getTime();
const D2 = Date2.getTime();

const initialData = {
    data: [
        {
            title: "title1",
            description: "description",
            date: Date1,
            key: D1,
        },
        {
            title: "title2",
            description: "description",
            date: Date2,
            key: D2,
        },
    ],
    reports: [
        {
            title: "Title",
            text: "text",
            date: Date1,
            key: D1,
        },
        {
            title: "Title",
            text: "text",
            date: Date2,
            key: D2,
        },
    ],
};

function rootReducer(state, action) {
    let newData;
    switch (action.type) {
        case "At-present/add":
            newData = [...state.data];
            newData.push(action.payload);
            return { ...state, data: newData };
        case "At-present/NoteAdd":
            let newNote;
            newNote = [...state.reports];
            newNote.push(action.payload);
            return { ...state, data: newNote };
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
