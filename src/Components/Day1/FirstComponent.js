import {Component} from 'react';

export default class FirstComponent extends Component{
    constructor(){
        super();
        this.state = {
            userName:"Aly",
            imgSrc:"./Images/1.jpg"
        }
    }

    changeTextImage = ()=>{
        // console.log("Changed")
        this.setState({userName:"Samy",imgSrc:"./Images/2.jpg"})
        // this.setState({imgSrc:"./Images/2.jpg"})
    }

   render(){
       return (
               <div>
                   <input 
                       type="text" 
                       // value={this.state.userName}
                       onChange={(e)=>{
                           // console.log(e.target.value);
                           // this.state.userName = e.target.value;
                           // console.log(this.state.userName);
                           this.setState({userName:e.target.value})
                       }}
                   />
                   {this.state.userName}

                    <img src='https://images.unsplash.com/photo-1652663496063-88f77cca9ae1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'/>
                    
                    <img src={this.state.imgSrc}/>
                    
                    <input 
                        type="button" 
                        value="Change"
                        onClick={this.changeTextImage}   
                    />
               </div>
       )
   }
}


// export default FirstComponent;