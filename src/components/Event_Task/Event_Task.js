import React from "react";
import "./Event_Task.css";
import { useSelector } from "react-redux";
import { useRef } from "react";

export default function Event_Task() {
    const list = useSelector((state) => state.data);
    return (
        <section className="Event_Task">
            {list.map((item) => {
                const Days = useRef();
                const Hours = useRef();
                const Minutes = useRef();
                const Seconds = useRef();
                const worker = new Worker("Worker.js");
                worker.postMessage(item.date); // send end of event
                worker.onmessage = (message) => {
                    Days.current.value = message.data.Days;
                    Hours.current.value = message.data.Hours;
                    Minutes.current.value = message.data.Minutes;
                    Seconds.current.value = message.data.Seconds;
                };

                return (
                    <div key={item.key} className="Event_Task_plate">
                        <div className="Event_Task_textplate">
                            <div className="Event_Task_title">{item.title}</div>
                            <div className="Event_Task_desctiption">
                                {item.description}
                            </div>
                        </div>
                        <div className="ButtonAndTimerPlate">
                            <input
                                type="button"
                                className="Event_Task_OkButton"
                                value="&#9989;"
                            />
                            <div className="TimerPlate">
                                <input
                                    type="text"
                                    className="TimerNumberPlate"
                                    ref={Days}
                                    value='0'
                                    disabled
                                />
                                :
                                <input
                                    type="text"
                                    className="TimerNumberPlate"
                                    value='0'
                                    ref={Hours}
                                    disabled
                                />
                                :
                                <input
                                    type="text"
                                    className="TimerNumberPlate"
                                    value='0'
                                    ref={Minutes}
                                    disabled
                                />
                                :
                                <input
                                    type="text"
                                    className="TimerNumberPlate"
                                    value='0'
                                    ref={Seconds}
                                    disabled
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
