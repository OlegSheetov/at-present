import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

// Это просто костыль. С помощью этого кода поставил ключ и дату
const Date1 = new Date("2023-01-31T12:54");
const Date2 = new Date("2023-12-31T21:00");
const D1 = Date1.getTime();
const D2 = Date2.getTime();
const Date3 = new Date("Jun 30 , 2023");
const Date4 = new Date("Jun 2 , 2024");
const D3 = Date3.getTime();
const D4 = Date4.getTime();

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
            console.log(action.payload);
            const deed = state.data.find((current) => {
                return current.key === Number(action.payload.key);
            });
            deed.title = action.payload.title;
            deed.description = action.payload.description;
            deed.date = new Date(action.payload.date);
            deed.startTime = action.payload.startTime;
            console.log(deed);
            return { ...state };
        case "At-present/NoteAdd":
            state.reports.push(action.payload);
            return { ...state };
        default:
            return state;
    }
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
