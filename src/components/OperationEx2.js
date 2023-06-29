import Button from "../components/Navigation/Button/Button";


const OperationEx2 = () => {
    const [operator, setOperator] = useState('+');

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
        <div className="Operation" >
            <Button key='button1' count1={count}/>
            <select onChange={(event) => setOperator(event.target.value)} id="mathsSings" className="MathsSigns">
                <option value='+'>+</option>
                <option value='-'>-</option>
                <option value='*'>X</option>
                <option value='/'>/</option>
            </select>
            <Button key='button2' count2={count} />
            <p> = </p>
            <p>{result}</p>
        </div>

    )
}

export default OperationEx2;