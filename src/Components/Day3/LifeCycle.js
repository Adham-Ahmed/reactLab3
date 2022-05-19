import { Component } from "react";

export default class LifeCycel extends Component{
    constructor(){
        super();
        console.log("CTOR")
        this.state = {
                name:""
        }
    }

    render(){
        console.log("Renderd")
        // this.setState({name:"SOSO"})
        return(
            <div>
                Life Cycle Component Works
                {this.state.name}
            </div>
        )
    }

    componentDidMount(){//Fetch Data From API
        console.log("Mounted");
        this.setState({name:"Aly"})
    }

    componentDidUpdate(){//
        console.log("Updated Successfully")
        // this.setState({name:"KOKO"});// render ===> Updated ===> render ===> updated ==>
    }

    componentWillUnmount(){//Memorization
        console.log("Un Mounted")
    }

    shouldComponentUpdate(){
        console.log(this.state.name)
        return true;
    }
}