import TextInfo from "../components/Navigation/TextInfo";
import Title from "../components/Title";

const Exercise3 = (props) => {  
    const numberExercise = <div>3</div>
    const textContent = <div>
        <p><a>Iteration 1</a>: Give the value of "x" from <strong>ComponentA</strong> to <strong>ComponentB</strong> </p>
        <p><a>Iteration 2</a>: Change the "x" when clicking on the button "x++"</p>
    </div>

    return (
        <div className="Exercise3" >
            <Title numberExercise={numberExercise} />
            <TextInfo textContent = {textContent}/>

        </div>
    )
}

export default Exercise3;