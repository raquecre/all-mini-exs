import ComponentAEx3 from "../components/ComponentAEx3/ComponentAEx3";
import TextInfo from "../components/Navigation/TextInfo";
import Title from "../components/Title";

const Exercise3 = (props) => {  
    const numberExercise = <div>3</div>
    const textContent = <div>
        <p><p>Iteration 1</p>: Give the value of "x" from <strong>ComponentA</strong> to <strong>ComponentB</strong> </p>
        <p><p>Iteration 2</p>: Change the "x" when clicking on the button "x++"</p>
    </div>

    return (
        <div className="Exercise3" >
            <Title numberExercise={numberExercise} />
            <TextInfo textContent = {textContent}/>
            <ComponentAEx3/>
           

        </div>
    )
}

export default Exercise3;