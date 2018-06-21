import React, { Component } from 'react';

export default class Home extends Component {
    constructor (){
        super();
        this.addedName = this.addedName.bind(this);
    }
    addedName(event){
        event.preventDefault();
        let input = this.refs.nameAdd;
        let name = input.value;
        this.props.nameChange(name);
    }
    render() {
        return (
            <div>
                <form className = {this.props.userName.nameEntered ? 'container hidden' : 'container link'} onSubmit= {this.addedName} >
                    <h3>Hey there! What's Your Name?</h3>
                    <input className="form-control" type="text" ref = "nameAdd" placeholder="Name"/> 
                    <button type="submit" className="btn btn-primary marginx1" >Submit</button>
                 </form> 
                 <h3 className = {this.props.userName.nameEntered ? 'container' : 'container hidden'}>Welcome {this.props.userName.username}</h3>
                 <h4>Time to equipt some new features!</h4>
                 <div>
                    <img className = "image2" src="../images/sean-whelan-360832-unsplash.jpg" alt="Game Controler"/> 
                 </div>
            </div>
        );
    }
}
