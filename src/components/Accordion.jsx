import { useEffect, useState } from "react";
import {FAQ} from "../API/faq.json";

export const Accordion = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(FAQ);
    }, []);
    return <h1>Hello React!</h1>;
};