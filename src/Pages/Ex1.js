import Button from "../components/Navigation/Button/Button";
import TextInfo from "../components/Navigation/TextInfo";
import Title from "../components/Title";

const Exercise1 = (props) => {
    const numberExercise = <div>1</div>
    const buttonContent = <p> likes</p>;
    const textContent = <div>
        <p>  Increment the number of like when you click on it.</p>
    </div>

    return (
        <div className="Exercise1" >
            <Title numberExercise={numberExercise} />
            <TextInfo textContent={textContent} />
            <Button buttonContent={buttonContent} />
        </div>
    )
}

export default Exercise1;