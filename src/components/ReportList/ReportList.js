import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import "./ReportList.css";
export default function ReportList() {
    const Reports = useSelector((state) => state.reports);
    const NavigateToDetail = useNavigate();
    const Navigate = useNavigate();
    return (
        <section className="Report">
            {Reports.map((item) => {
                return (
                    <div key={item.Notekey} className="ReportPlate">
                        <Link className="ReportLink" to={`${item.Notekey}`}>
                            <h1 className="ReportTitle">{item.title}</h1>
                        </Link>
                        <p className="ReportText">{item.text}</p>
                        <p className="ReportDate">{String(item.date)}</p>
                    </div>
                );
            })}
            <input
                className="ReportCreateButton"
                type="button"
                value="+"
                onClick={() => {
                    Navigate("/Note_Report");
                }}
            />
        </section>
    );
}
