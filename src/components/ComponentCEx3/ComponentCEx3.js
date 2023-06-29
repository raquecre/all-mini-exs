import Button from "../Navigation/Button/Button";

const ComponentCEx3 = (props) => {
    const { buttonX } = props;
    return (
        <div className="componentCEx3" >
            <h1>Component C</h1>
			<p>X = 42 <strong> </strong> </p>
            <Button />
        </div>
    )
}

export default ComponentCEx3;
