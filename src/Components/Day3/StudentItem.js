import { NavLink } from "react-router-dom";

let StudentItem = ({artistInfo})=>{
    // console.log({artistInfo});
    return (
        <div className="alert alert-info">
            <h3><NavLink to={`/artists/${artistInfo.id}`}>{artistInfo.name}</NavLink></h3>
            {/* Cover:<NavLink to={`/artists/${artistInfo.id}`}>{artistInfo.cover}</NavLink><br></br> */}
            <img src={`/imagesDay3/covers/${artistInfo.cover}.jpg`} width="80px" alt="cover"/>
        </div>
    )
}

// "id": 1,
// "name": "Jimi Hendrix",
// "cover":"jimi_hendrix",
// "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
// "albums": [
//     {"albumId":"a1","title":"Electric Ladyland","year":1968,"cover":"electric-ladyland","price":20},
//     {"albumId":"a2","title":"Experience","year":1971,"cover":"experienced","price":25},
//     {"albumId":"a3","title":"Isle of Wright","year":1971,"cover":"isle_of_wright","price":15},
//     {"albumId":"a4","title":"Band of Gypsys","year":1970,"cover":"band_of_gypsys","price":10}
// ],
// "genre":"rock, blues"

export default StudentItem;