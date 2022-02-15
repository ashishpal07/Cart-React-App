

import React from 'react';

class CartItem extends React.Component{
    constructor () {
        super();
        this.state = {
            price : 999,
            title : 'Mobile Phone',
            Qty : 1,
            img : ''
        }
    }

    // important to learn and remember
    increaseQuantity = () => {
        
        // setState form 1
        // this.setState({
        //     Qty: this.state.Qty + 1
        // })

        // setState form 2 if previous state required then use this
        this.setState((prevState) => {
            return {
                Qty: prevState.Qty + 1,
            }
        })
    }

    // decrease quantity of product after clicking on minus button
    decreaseQuantity = () => {
        const { Qty } = this.state;

        if(Qty === 0){
            return;
        }
        
        this.setState((prevState) => {
            return {
                Qty: prevState.Qty - 1,
            }
        })
    }

    render(){
        const { price, title, Qty } = this.state;
        return (
            <div className="cart-item">

                <div className="left-block">
                    <img style={styles.image} alt="s" />
                    {/* <img /> */}
                </div>

                <div className="right-block">
                    <div style={{fontSize: 25}} >{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {Qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1644903811~hmac=585360da0770bff2748a555e5a2657f9" 
                            onClick={this.increaseQuantity}
                        />
                        
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            onClick={this.decreaseQuantity}
                        />
                        
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" 
                        />
                    </div>
                </div>

            </div>
        );
    }
}


const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem;