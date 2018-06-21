import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Hats from './Hats';
import Shoes from './Shoes';
import Cart from './Cart';
const axios = require('axios');

export default class Shop extends Component {
    constructor(){
        super();
        this.state = {
            hats: [
                {
                    name: 'One Punch Man',
                    price:20.00,
                    picture:'../images/onePunch.jpg',
                    type: 'hat'
                },
                {
                    name: 'Black Panther',
                    price: 25.99,
                    picture:'https://static-ca.ebgames.ca/images/products/738389/3max.jpg',
                    type: 'hat'
                },
                {
                    name: 'Dead Pool',
                    price: 26.99,
                    picture:'../images/DeadPool.jpg',
                    type: 'hat'
                },
                {
                    name: 'Aggretsuko',
                    price:24.99,
                    picture:'../images/aggretsuko.jpg',
                    type: 'hat'
                },
                {
                    name:'Overwatch',
                    price:29.99,
                    picture:'../images/overwatch.jpg',
                    type: 'hat'
                },
                {
                    name: 'Zelda',
                    price:24.99,
                    picture:'../images/Zelda.jpg',
                    type: 'hat'
                },
                {
                    name:'Team Rocket',
                    price:19.99,
                    picture:'../images/teamRocket.jpg',
                    type: 'hat'
                },
                {
                    name: 'Flash',
                    price:26.99,
                    picture:'../images/flash.jpg',
                    type: 'hat'
                },
                {
                    name:'Star Wars',
                    price:22.99,
                    picture: '../images/sw_blueprint.jpg',
                    type: 'hat'
                },
            ],
            shoes: [
                {
                    name: 'Dr. Who',
                    price:26.00,
                    picture:'../images/DrWho.jpg',
                    type: 'shoe'
                },
                {
                    name: 'Black Panther',
                    price: 37.99,
                    picture:'../images/blackPanther_sneaker.jpg',
                    type: 'shoe'
                },
                {
                    name: 'IronMan',
                    price: 26.99,
                    picture:'../images/ironman.jpg',
                    type: 'shoe'
                },
                {
                    name: 'Joker',
                    price:27.99,
                    picture: '../images/Joker.jpg',
                    type: 'shoe'
                },
                {
                    name:'WonderWoman',
                    price:36.99,
                    picture:'../images/wonderWoman.jpg',
                    type: 'shoe'
                },
                {
                    name: 'Harry Potter',
                    price:44.99,
                    picture:'../images/hogwarts.jpg',
                    type: 'shoe'
                },
                {
                    name:'Avengers',
                    price:45.99,
                    picture:'../images/avengers.jpg',
                    type: 'shoe'
                },
                {
                    name: 'Harley Quinn',
                    price:24.99,
                    picture:'../images/HarleyQuinn.jpg',
                    type: 'shoe'
                },
                {
                    name:'Star Wars',
                    price:55.99,
                    picture: '../images/darthV.jpg',
                    type: 'shoe'
                },
            ],
            cart: [{
                name: 'Healing Potion: to help fill your cart\'s health bar',
                price: 0.00,
                picture: 'img',
                type: 'prop',
                qty: 1
            },
            ],
            display: [{
                display: false
            }]
        }
        this.addToCart = this.addToCart.bind(this);
        this.displayCart = this.displayCart.bind(this);
    }  
// new item to cart from Items
    addToCart(name, price, type){
        let added = {
            name: name,
            price: price,
            type: type,
            qty: 1
        }
        axios.post('http://localhost:8080/shop', added)
             .then(results =>{
            console.log('Added to cart');
        })
             .catch(error =>{
            console.log('Giiirl that did not work');
        })

        let mimic = Array.from(this.state.cart);
        mimic.push(added);
        this.setState({
            cart:mimic
        });
    };

    componentDidMount(){
    axios.get('http://localhost:8080/shop')
         .then(results =>{
             if (results.data.length === 0) {
                 return this.state.cart
             }
            this.setState({
                cart:results.data
            })
         })
         .catch(error =>{
             console.log('No! You were the choosen one!');
         });
    }

    displayCart(){
        let mimic = Array.from(this.state.display);
        mimic.display = !this.state.display.display;
        this.setState({
            display:mimic
        })
    }
    
    render() {
        return (
            <div>
                <h1>Get Your Geek On</h1>
                <div>
                    <h4>Okay {this.props.userName.username}, What do you need today?</h4>
                </div>
                <nav className = "link">
                    <Link className = "marginx1 shadow-light" to="/shop/hats"> Hats </Link>
                    <Link className = "marginx1 shadow-light" to="/shop/shoes"> Shoes </Link>
                </nav>
                <Switch>
                    <Route path = "/shop/hats" render={ () => {return <Hats products= {this.state.hats} addToCart = {this.addToCart}/> } }/>
                    <Route path = "/shop/shoes" render={ () => {return <Shoes products= {this.state.shoes} addToCart = {this.addToCart} /> } }/> />
                </Switch>
                <div> 
                    <Cart products = {this.state.cart} display = {this.state.display} displayCart = {this.displayCart} />
                </div>
            </div>
        );
    }
}
