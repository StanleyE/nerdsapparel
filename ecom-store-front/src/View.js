import React, { Component } from 'react';


export default class Item extends Component {
    render() {
        let name = this.props.name;
        let price = this.props.price;
        let qty = this.props.qty;
        let id = this.props.id;
        return (
            <div>
                <div className= "container box" >
                <table className = 'table'>
                    <thead>
                        <tr>
                            <th> # </th>
                            <th> Name </th>
                            <th> Price </th>
                            <th> Qty </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope = 'row'>{id}</th>
                            <td>{name}</td>
                            <td>${price}</td>
                            <td>Qty:{qty}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}