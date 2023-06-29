//import Button from "../components/Navigation/Button/Button";
import TextInfo from "../components/Navigation/TextInfo";

//import TittleEx2 from "../components/Navigation/Titles/titleEx2";
import OperationEx2 from "../components/OperationEx2";
import Title from "../components/Title";

const Exercise2 = () => {
const numberExercise = <div>2</div>
    const textContent =
        <div className="textInfo">
            <p> Increment the number when you click on the buttons and display the result of the operation.</p>
            <p>You can only use 3 states.</p>
        </div>

    return (
        <div className="Exercise2" >
            <Title numberExercise={numberExercise}/>
            <TextInfo textContent={textContent} />
            <OperationEx2/>
          {/*   <Button />
            <Button /> */}

        </div>
    )
}

export default Exercise2;