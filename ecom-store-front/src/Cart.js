import React from 'react';
import View from './View';

export default class Cart extends React.Component {
    render() {
        let source = this.props.products;
        //total price qty of all items in cart
        let total = source.reduce((accumulator, currentValue)=>{
            return accumulator + currentValue.price
        }, 0);
        //limits the decimal to 2 places
        let roundedTotal = total.toFixed(2);

        //Total items in the cart
        let totalItems = source.reduce((accumulator, currentQty)=>{
            return accumulator + currentQty.qty
        },0);
        //Currently won't work untless have 1 dummy item!!
        console.log('You have ' + totalItems + ' items in your cart; ' + total + ' value of cart!');


        // To display items
        let ViewJSX = [];
        let item = this.props.products
            for (let i = 0; i < item.length; i++) {
                let current = item[i];
                ViewJSX.push( < View name = {current.name} price = {current.price} type = {current.type}  qty = {current.qty} id = {i} />);
            };

        return (
            <div>
                <div>
                    <h2>Cart Status</h2>
                    <h4>{totalItems} items in your cart</h4>
                    <h4>Current Total: $ {roundedTotal} </h4>
                </div>
                <button type="button" className="btn button marginx2" onClick = {()=>{this.props.displayCart()} }> View Cart </button>
                <div className={this.props.display.display ? 'container' : 'hidden'}>
                    {ViewJSX}
                    <button type="button" className="btn button marginx2"> Buy Now! </button>
                </div>
            </div>
        );
    }
}