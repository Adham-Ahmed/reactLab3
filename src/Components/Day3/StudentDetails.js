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
                    <div className="alert alert-primary text-center" >
                        <img src={`/imagesDay3/covers/${artist.cover}.jpg`} width="300px" alt="cover"/>
                        <h3> {artist.name}</h3>
                        <p>lorem ipsum dolor sit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium assumenda quibusdam voluptatem facere voluptate Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta quos nihil, quae commodi autem quo minus. Blanditiis, fugiat, voluptate dolores ea aliquam impedit pariatur assumenda tempore ut explicabo aspernatur adipisci. </p>
                        {/* <img src={`/imagesDay3/albums/${artist.albums[0].cover}.jpg`} width="80px" alt="cover"/> */}
                        {artist.albums.map(
                            (album)=>{
                                console.log({album})
                                return (
                                        <img src={`/imagesDay3/albums/${album.cover}.jpg`} width="200px" alt="cover"/>
                                )
                            }
                        )}

            {/* {artist.albums.map((album)=>{
               
                    <div key={student.albumId} className="studentItem">
                        <h3>{student.name}</h3>
                        <h3>{student.email}</h3>
                    </div>
                 }
             } */}

          
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