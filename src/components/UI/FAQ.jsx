export const FAQ = ({ curData }) => {
    const { question, answer } = curData;
    return (
        <li>
        <div className="accordion-grid">
        <p>{curElem.question}</p>
        <button>Show</button>
        </div>
        <p>{curElem.answer}</p>
       </li> 
    );
};