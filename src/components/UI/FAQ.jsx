import { useState } from "react";

export const FAQ = ({ curData }) => {
    const { question, answer } = curData;
    const [activeId, setActiveId] = useState(false);

    return (
        <li>
        <div className="accordion-grid">
        <p>{question}</p>
        <button>{ activeId ? "Close" : "Show" }</button>
        </div>
        <p>{ activeId && answer}</p>
       </li> 
    );
};