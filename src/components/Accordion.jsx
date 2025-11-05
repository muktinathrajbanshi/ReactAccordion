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
                        return <FAQ key={curElem.id} curData={curElem} />;
                    })
                }
            </ul>
        </>
    );
};