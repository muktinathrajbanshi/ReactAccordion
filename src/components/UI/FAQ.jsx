export const FAQ = () => {
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