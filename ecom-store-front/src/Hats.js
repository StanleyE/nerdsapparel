import React, { Component } from 'react';
import Item from './Item';

export default class Hats extends Component {
    render() {

            let ListJSX = [];
            let source = this.props.products
            for (let i = 0; i < source.length; i++) {
                    let current = source[i];
                    ListJSX.push( < Item name = {current.name} price = {current.price} picture = {current.picture} type = {current.type} addToCart = {this.props.addToCart} />);
            }
        return (
            <div>
                <h2>Hats</h2>
                <div className = 'row'>
                    {ListJSX}
                </div>
            </div>
        );
    }
}
