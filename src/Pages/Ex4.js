import AplicationEx4 from "../components/AplicationEx4";
import TextInfo from "../components/Navigation/TextInfo";
import Title from "../components/Title";

const Exercise4 = () => {
    const numberExercise = <div>4</div>
    const textContent =
    <div className="textInfo">
    <p> When the user type some information in the input, it should change the list of prime numbers</p>
</div>

    return (
        <div className="Exercise4" >
            <Title numberExercise={numberExercise} />
            <TextInfo textContent={textContent} />
            <AplicationEx4/>

        </div>
    )
}

export default Exercise4;