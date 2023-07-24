import Button from "../Navigation/Button/Button";

const ComponentCEx3 = (props) => {
    const { count } = props;
    return (
        <div className="componentCEx3" >
            <h1>Component C</h1>
			<p>X = <strong> {count}  </strong> </p>
            <Button count = {count} />
        </div>
    )
}

export default ComponentCEx3;
