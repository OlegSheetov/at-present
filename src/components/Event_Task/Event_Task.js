import React from "react";
import "./Event_Task.css";
import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import create from '../../UI/CalendarPlus.svg'
import check from '../../UI/check.svg'
export default function Event_Task() {
    const list = useSelector((state) => state.data);
    return (
        <section className="Event_Task">
            {list.map((item) => {
                const Days = useRef();
                const Hours = useRef();
                const Minutes = useRef();
                const Seconds = useRef();

                let worker = new Worker("Worker.js");
                worker.postMessage(item.date); // send end of event

                useEffect(() => {
                    disableOkButton();
                    worker.onmessage = (message) => {
                        Days.current.value = message.data.Days;
                        Hours.current.value = message.data.Hours;
                        Minutes.current.value = message.data.Minutes;
                        Seconds.current.value = message.data.Seconds;
                        disableOkButton();
                    };
                    return () => {
                        worker.onmessage = (message) => {
                            // Затычка чтобы после размонтирования воркер
                            // не пытался присвоить значения
                            // и ничего не делал
                        };
                    };
                });

                //Время начала задачи сегодня
                const starttime = item.startTime.split(":");
                const EventStartTime = new Date();
                EventStartTime.setHours(starttime[0]);
                EventStartTime.setMinutes(starttime[1]);
                EventStartTime.setSeconds(0);

                //Время окончания задачи сегодня
                const EventEndTime = new Date();
                EventEndTime.setHours(item.date.getHours());
                EventEndTime.setMinutes(item.date.getMinutes());
                EventEndTime.setSeconds(0);

                // Сейчас
                const Now = new Date();

                // ОкКнопка
                const OKButtonRef = useRef();

                function CountSpendetTime() {
                    const spendedTimeMS = Now - EventStartTime;
                    const spendedTimeHRS = Math.floor(
                        spendedTimeMS / 1000 / 60 / 60
                    );
                    item.timeSpended += spendedTimeHRS;
                    OKButtonRef.current.setAttribute("disabled", "");
                    alert("Spended time added");
                }

                function disableOkButton() {
                    // Функция отключает кнопку сохранения потраченного
                    // на задачу времени до начала события и после.
                    if (Now < EventStartTime || Now > EventEndTime) {
                        OKButtonRef.current.setAttribute("disabled", " ");
                    } else {
                        OKButtonRef.current.removeAttribute("disabled", " ");
                    }
                }

                return (
                    <div key={item.key} className="Event_Task_plate">
                        <div className="Event_Task_textplate">
                            <Link className="Link" to={`/${item.key}`}>
                                <div className="Event_Task_title">
                                    {item.title}
                                </div>
                                <div className="Event_Task_desctiption">
                                    {item.description}
                                </div>
                            </Link>
                        </div>
                        <div className="ButtonAndTimerPlate">
                            <img
                                className="Event_Task_OkButton"
                                ref={OKButtonRef}
                                onClick={CountSpendetTime}
                                src={check}
                            />
                            <div className="TimerPlate">
                                <input
                                    type="text"
                                    className="TimerNumberPlate"
                                    ref={Days}
                                    value="0"
                                    disabled
                                />
                                :
                                <input
                                    type="text"
                                    className="TimerNumberPlate"
                                    value="0"
                                    ref={Hours}
                                    disabled
                                />
                                :
                                <input
                                    type="text"
                                    className="TimerNumberPlate"
                                    value="0"
                                    ref={Minutes}
                                    disabled
                                />
                                :
                                <input
                                    type="text"
                                    className="TimerNumberPlate"
                                    value="0"
                                    ref={Seconds}
                                    disabled
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
            <Link to="/Create_Event">
                <img src={create} alt="create" />
            </Link>
        </section>
    );
}
