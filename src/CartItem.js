

import React from 'react';

class CartItem extends React.Component{
    constructor () {
        super();
        this.state = {
            price : 999,
            title : 'Phone',
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
                            src="https://cdn-icons.flaticon.com/png/128/3303/premium/3303893.png?token=exp=1644470993~hmac=9894b0882ef0c5333be50ca36671aff4" 
                            onClick={this.increaseQuantity}
                        />
                        
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons.flaticon.com/png/128/2740/premium/2740679.png?token=exp=1644471139~hmac=0b5414ed185c34cd1426dfb09b41a781"
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