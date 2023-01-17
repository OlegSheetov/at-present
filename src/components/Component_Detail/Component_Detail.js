import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Component_Detail.css";
export default function Component_Detail() {
    let { key } = useParams();
    // почему то не хочет увидеть ключ
    const deed = useSelector((state) => {
        return state.data.find((current) => current.key === Number(key));
    });
    return (
        <section className="ComponentDetail">
            <h1 className="ComponentDetailTitle">{deed.title}</h1>
            <p className="ComponentDetailDescription">{deed.description}</p>
            <p className="ComponentDetailDate">{String(deed.date)}</p>
        </section>
    );
}
