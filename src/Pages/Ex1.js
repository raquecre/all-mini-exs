import Button from "../components/Navigation/Button/Button";
import TextInfo from "../components/Navigation/TextInfo";
import TitleEx1 from "../components/Navigation/Titles/titleEx1";

const Exercise1 = (props) => {
    const buttonContent = <p> likes</p>;
    const textContent = <div>
        <p>  Increment the number of like when you click on it.</p>
    </div>

    return (
        <div className="Exercise1" >
            <TitleEx1 />
            <TextInfo textContent={textContent} />

            <Button buttonContent={buttonContent} />
        </div>
    )
}

export default Exercise1;