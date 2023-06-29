import { NavLink } from "react-router-dom";

const Navigation = () => {

    return (
        <div className="Nav">
            <h1> React Exercises</h1>

            <div className="numberExs">
                <NavLink to='/' className={({ isActive }) => isActive ? "selected" : "selected"} >
                    #1
                </NavLink>

                <NavLink to='/exercise2' className={({ isActive }) => isActive ? "selected" : ""}>
                    #2
                    </NavLink>

                <NavLink to='/exercise3' className={({ isActive }) => isActive ? "selected" : ""} >
                    #3
                    </NavLink>

                <NavLink to='/exercise4' className={({ isActive }) => isActive ? "selected" : ""} >
                    #4
                    </NavLink>
            </div>

        </div>
    )
}

export default Navigation;
