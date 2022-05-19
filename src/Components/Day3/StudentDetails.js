import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let StudentDetails = ()=>{
    let {id} = useParams();
    let [artist, setArtist] = useState({}); 
    
    useEffect(()=>{
        fetch(`http://localhost:3002/artists/${id}`)
        .then((response)=>{return response.json()})
        .then((data)=>{setArtist(data)})
        .catch((err)=>{console.log(err)})
    },[]);

    let renderStudent = ()=>{
        if(artist.name){
                return (
                    <div className="alert alert-primary">
                        <img src={`/imagesDay3/covers/${artist.cover}.jpg`} width="80px" alt="cover"/>
                        <h3> {artist.name}</h3>
                        <p>lorem ipsum dolor sit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium assumenda quibusdam voluptatem facere voluptate </p>
                        <img src={`/imagesDay3/albums/${artist.albums[0].cover}.jpg`} width="80px" alt="cover"/>

                    </div>
            )
        }else{
            return (<h1>No Student</h1>)
        }
    }

    return (
        <div>
            {renderStudent()}
        </div>
    )
}

export default StudentDetails;