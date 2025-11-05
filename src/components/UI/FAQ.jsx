import { useState } from "react";

export const FAQ = ({ curData, onToggle }) => {
    const { question, answer } = curData;

    return (
        <li>
        <div className="accordion-grid">
        <p>{question}</p>
        <button onClick={onToggle} className={isActive? "active-btn" : ""}>{ activeId ? "Close" : "Show" }</button>
        </div>
        <p>{ activeId && answer}</p>
       </li> 
    );
};