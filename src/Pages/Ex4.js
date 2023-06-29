import TextInfo from "../components/Navigation/TextInfo";
import Title from "../components/Title";

const Exercise4 = () => {
    const numberExercise = <div>4</div>
    const textContent =
        <div className="textInfo">
            <p> Increment the number of like when you click on it</p>
        </div>

    return (
        <div className="Exercise4" >
            <Title numberExercise={numberExercise} />
            <TextInfo textContent={textContent} />

        </div>
    )
}

export default Exercise4;