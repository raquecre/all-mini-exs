import ComponentCEx3 from "../ComponentCEx3/ComponentCEx3";

const ComponentBEx3 = (props) => {
const {valueX} = props;
    return (
        <div className="componentBEx3" >
            <h1>Componet B</h1>
            <p>X = {valueX} </p>
            <ComponentCEx3/>
        </div>
    )
}

export default ComponentBEx3;;
