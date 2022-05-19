import { NavLink } from "react-router-dom";

let StudentItem = ({artistInfo})=>{
    // console.log({artistInfo});
    return (
        <div className="alert alert-info text-center">
            <h1><NavLink to={`/artists/${artistInfo.id}`}>{artistInfo.name}</NavLink></h1>
            {/* Cover:<NavLink to={`/artists/${artistInfo.id}`}>{artistInfo.cover}</NavLink><br></br> */}
            <img src={`/imagesDay3/covers/${artistInfo.cover}.jpg`} width="200px" alt="cover"/>
        </div>
    )
}

export default StudentItem;