import { NavLink } from "react-router-dom";

let Header = ()=>{
    return (
        <div>
            {/* <ul>
                <li><a href="">Users</a></li>
                <li><a href="/users">Users</a></li>
                <li><a href="/users/5">User Details</a></li>
            </ul> */}

            <ul>
                <li><NavLink to={'/'}>Users</NavLink></li>
                <li><NavLink to={'/users/'}>Users</NavLink></li>
                <li><NavLink to={'/users/5'}>User Details</NavLink></li>
                <li><NavLink to={'/about'}>About</NavLink></li>
                <li><NavLink to={'/asdkka'}>Error</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;