import { NavLink } from "react-router-dom";

let Header = ()=>{
    return (
        <div className="alert alert-dark text-center p-2 ">
            <h1><NavLink className="btn btn-outline-dark" to={""}>Music DB</NavLink></h1>
        </div>
    )
}

export default Header;