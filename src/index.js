import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialData = {
    data: [
        {
            title: "title",
            description: "description",
            date:'',
            key: 1,
        },
        {
            title: "title",
            description: "description",
            date:'',
            key: '2',
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
