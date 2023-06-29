import ComponentBEx3 from "../ComponentBEx3/ComponentBEx3";

const ComponentAEx3 = (props) => {
    const valueX = 42;
    
    return (
        <div className="componentAEx3" >
            <h1>Component A</h1>
            <p>X = {valueX} </p>
            <ComponentBEx3 valueX = {valueX} />
        </div>
    )
}

export default ComponentAEx3;;
