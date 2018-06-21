import React, { Component } from 'react';


export default class Item extends Component {
    render() {
        let name = this.props.name;
        let price = this.props.price;
        let type = this.props.type;
        return (
            <div className = 'col-sm'>
                <div className= "box" >
                 <img className = "image" src= {this.props.picture} alt= {type}/>
                <h2>{name}</h2>
                <h3>${price}</h3>
                    <div>
                        <button type="button" className="btn button" onClick = {()=>{this.props.addToCart(name, price, type)} }> <i className="fas fa-cart-arrow-down fa-2x"></i> </button>
                    </div>
                </div>
            </div>
        );
    }
}
