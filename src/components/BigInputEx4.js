const BigInputEx4 = ({ onQuery }) => {
    function handleInput(e){
        onQuery(e.target.value);
    }
    
    return (
        <div className="BigInput">
            <h2>Big BigInput</h2>
            <div className="limit">
                <label>
                    Limit =
                    <input type="number" onInput={ handleInput} />
                </label>
            </div>

        </div>
    )
}

export default BigInputEx4;