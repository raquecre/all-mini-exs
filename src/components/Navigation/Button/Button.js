import { useState } from "react";

const Button = (props) => {
  const [count, setCount] = useState(0);
  const {buttonContent} = props;
    
  const likeClick = () => {
        setCount(count => count + 1);
        
    };  
    

    return (
        <div className="button">
            <button onClick={likeClick}> {count}  { buttonContent}</button>
        </div>
    )
}

export default Button;