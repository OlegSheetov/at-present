import React from "react";
import "./Event_Task.css";
import { useSelector } from "react-redux";

const worker = new Worker("Worker.js");
const Date1 = new Date();
const Date2 = new Date("Jan 31 , 2023");
worker.postMessage([Date1, Date2]); // first date should be less then second
Worker.onmessage = (message) => {
    console.log(message.data);
};
export default function Event_Task() {
    const list = useSelector((state) => state.data);
    return (
        <section className="Event_Task">
            {list.map((item) => {
                return (
                    <div key={item.key} className="Event_Task_plate">
                        <div className="Event_Task_textplate">
                            <div className="Event_Task_title">{item.title}</div>
                            <div className="Event_Task_desctiption">
                                {item.description}
                            </div>
                        </div>
                        <input
                            type="button"
                            className="Event_Task_OkButton"
                            value="&#9989;"
                        />
                    </div>
                );
            })}
        </section>
    );
}
