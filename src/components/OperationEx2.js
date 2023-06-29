//import Button from "../components/Navigation/Button/Button";
import { useState } from "react";

const OperationEx2 = () => {
    const [count1, setCounter1] = useState(0);
    const [count2, setCounter2] = useState(0);
    const [operator, setOperator] = useState('');

    const counter1 = () => setCounter1(count1 => count1 + 1);
    const counter2 = () => setCounter2(count2 => count2 + 1);

    /* function add(value1, value2) {
        return value1 + value2;
    } */

    function getResult() {
        if (operator !== null) {
            if (operator === '+') {
                return count1 + count2;
            } else if (operator === '-') {
                return count1 - count2;
            } else if (operator === '*') {
                return count1 * count2;
            } else if (operator === '/') {
                return count1 / count2;
            }
        }
    }

    const result = getResult();

    return (
        <div className="operation">
            <button id='button1' onClick={counter1}>{count1}</button>

            <select onChange={(event) => setOperator(event.target.value)} id="mathsSings" className="MathsSigns">
                <option value='+'>+</option>
                <option value='-'>-</option>
                <option value='*'>X</option>
                <option value='/'>/</option>
            </select>

            <button id='button2' onClick={counter2}>{count2}</button>
            <p> = </p>
            <p>{result}</p>

        </div>
    )
}





export default OperationEx2;