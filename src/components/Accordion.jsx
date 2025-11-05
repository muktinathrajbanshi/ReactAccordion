import { useEffect, useState } from "react";
import faq from "../API/faq.json";

export const Accordion = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(faq);
    }, []);

    // console.log(data);
    

    return (
        <>
            <h1>The Accordion</h1>
            <ul className="section-accordion">
                {
                    data.map((curElem) => {
                        return (
                            <li key={curElem.id}>
                                <div className="accordion-grid">
                                    <p>{curElem.question}</p>
                                    <button>Show</button>
                                </div>
                                <p>{curElem.answer}</p>
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
};