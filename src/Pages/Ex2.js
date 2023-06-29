//import Button from "../components/Navigation/Button/Button";
import TextInfo from "../components/Navigation/TextInfo";

import TittleEx2 from "../components/Navigation/Titles/titleEx2";
import OperationEx2 from "../components/OperationEx2";

const Exercise2 = () => {

    const textContent =
        <div className="textInfo">
            <p> Increment the number when you click on the buttons and display the result of the operation.</p>
            <p>You can only use 3 states.</p>
        </div>

    return (
        <div className="Exercise2" >
            <TittleEx2 />
            <TextInfo textContent={textContent} />
            <OperationEx2/>
          {/*   <Button />
            <Button /> */}

        </div>
    )
}

export default Exercise2;