import React, { useContext, useState } from 'react';
import { CartContext } from "../context/cart-context";
import { CheckoutContext } from '../context/checkout-context';

import '../assets/css/Checkout.css'
import CheckoutForm from '../components/checkout/CheckoutForm'
import ShippingForm from '../components/Shipping'
import CheckoutList from '../components/checkout/CheckoutList'
import PaymentMethodsList from '../components/Payment'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const Fields = ['fullname', 'email', 'mobile', 'address'];


function Checkout(props) {
    const [cartItems, setCartItems] = useContext(CartContext);
    const [checkoutItems, setCheckoutItems] = useContext(CheckoutContext);
    console.log(checkoutItems)
    const placeOrder = () => {
        console.log('ordered!')
    }
    const billing_info = (event) => {
        //console.log(checkoutItems)
        //checkoutItems[event.target.name] = event.target.value
        switch(event.target.name){
            case 'fullname':
                console.log('Fullname Input')
                setCheckoutItems({...checkoutItems,fullname:event.target.value})
            break;
            case 'email':
                console.log('email Input')
                setCheckoutItems({...checkoutItems,email:event.target.value})
            break;
            case 'mobile':
                console.log('mobile Input')
                setCheckoutItems({...checkoutItems,mobile:event.target.value})
            break;
            case 'address':
                console.log('address Input')
                setCheckoutItems({...checkoutItems,address:event.target.value})
            break;
        }
        console.log(checkoutItems)
        
    }
    const place_order = (event) => {
        event.preventDefault()
        console.log(event.target.elements.cardNumber.value)
    }

    return (
        <form onSubmit={place_order}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Item>
                            <h2>Billing Info</h2>
                            {
                                Fields.map((field) => {
                                    return <TextField
                                        style={{ "width": "100%", "marginBottom": "5px" }}
                                        onInput={billing_info} 
                                        required
                                        id="outlined-basic"
                                        label={field}
                                        name={field}
                                        variant="outlined" />
                                })
                            }
                            <ShippingForm />
                            <PaymentMethodsList />
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item>
                            <CheckoutList />
                            <Button type="submit" variant="contained">Place Order</Button>
                        </Item>
                    </Grid>

                </Grid>
            </Box>
        </form>
    )
}

export default Checkout
