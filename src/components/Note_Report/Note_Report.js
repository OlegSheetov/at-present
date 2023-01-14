import React from "react";
import './Note_Report.css'

const Today = new Date()

export default function Note_Report() {
    return (
        <section className="Note_Report_Plate">
            <h1 className="Header">Create your note/report</h1>
            <textarea
                type="text"
                className="Note_Report_Plate_Title"
                placeholder="Title"
            />
            <textarea
                className="Note_Report_Plate_Text"
                placeholder="text"
            ></textarea>
            <input  className='Note_Report_Plate_CreateButton'type="button" value="Create Note/Report" />
            <p> Today:{Today.toString()}</p>
        </section>
    );
}
