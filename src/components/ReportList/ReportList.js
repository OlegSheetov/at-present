import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import "./ReportList.css";
import create from '../../UI/plus-square.svg'
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
                            <p className="ReportTitle">{item.title}</p>
                        </Link>
                        <p className="ReportText">{item.text}</p>
                        <p className="ReportDate">{String(item.date)}</p>
                    </div>
                );
            })}
            <img
                src={create}
                className="ReportCreateButton"
                onClick={() => {
                    Navigate("/Note_Report");
                }}
            />
        </section>
    );
}
