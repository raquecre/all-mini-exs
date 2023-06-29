import TextInfo from "../components/Navigation/TextInfo";
import TittleEx4 from "../components/Navigation/Titles/titleEx4";

const Exercise4 = () => {
    const textContent =
        <div className="textInfo">
            <p> Increment the number of like when you click on it</p>
        </div>

    return (
        <div className="Exercise4" >
            <TittleEx4 />
            <TextInfo textContent={textContent} />

        </div>
    )
}

export default Exercise4;