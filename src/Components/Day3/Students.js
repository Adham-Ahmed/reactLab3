import { Component } from "react";
import StudentItem from "./StudentItem";

export default class Artists extends Component{
    constructor(){
        super();
        this.state = {
            AllArtists:[],
            errMess:""
        }
    }

    renderAllArtists = ()=>{
        if(this.state.AllArtists.length>0){
            return this.state.AllArtists.map((artist)=>{
                return (
                    <StudentItem key={artist.id} artistInfo = {artist}/>
                    )
                })
        }else if(this.state.errMess){
            return (<h1 className="alert alert-danger">Check ur Internet Connection</h1>)
        }else{
            return (<h1>Getting Data...</h1>)
        }
    }

    render(){
        console.log(this.state.AllArtists);
        return(
            <div>
                {this.renderAllArtists()}
            </div>
        )
    }

    //Fetch Data From API
    componentDidMount(){
        fetch("http://localhost:3002/artists")
        .then((response)=>{return response.json()})
        .then((data)=>{
            this.setState({AllArtists:data})
            this.setState({errMess:""})
        })
        .catch((err)=>{this.setState({errMess:err})})
    }
}