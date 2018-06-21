import React, { Component } from 'react';
import Item from './Item'

export default class Shoes extends Component {
    render() {
        let ListShoesJSX = [];
        let source = this.props.products
        for (let i = 0; i < source.length; i++) {
                let current = source[i];
                ListShoesJSX.push( < Item name = {current.name} price = {current.price} picture = {current.picture} type = {current.type} addToCart = {this.props.addToCart}/>);
        }
        return (
            <div className = 'row'>
                <h2>Shoes!</h2>
                {ListShoesJSX}
            </div>
        );
    }
}
