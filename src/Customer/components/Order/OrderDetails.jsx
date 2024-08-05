import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracking from './OrderTracking'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder'

const OrderDetails = () => {
  return (
    <div className='lg:px-20 px-5'>
        <div className='p-5 border mt-5 shadow-lg'>
            <h1 className='font-bold text-xl py-10'>Delivery Address</h1>
            <AddressCard/>
        </div>
        <div className='py-14'>
            <OrderTracking activeStep={3}/>
        </div>
        <p className='text-3xl font-semibold pb-20 '>Other items in your order</p>
        <div className='shadow-lg p-10 '>
        <Grid className='space-y-5' container>
            {[1,1,1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center", justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex item-center space-x-4'>
                        <div className=''> 
                        <img className='w-[5rem] h-[5rem]object-cover object-top' src='https://rukminim1.flixcart.com/image/612/612/xif0q/jean/d/s/c/36-mj-bk-pl-48-comfits-original-imagqbrnyjfzhs8v.jpeg?q=70' alt=''></img>
                        </div>
                        <div className='space-y-2 ml-5'>
                            <p className='font-semibold'>Men Slim Midrise Black Jeans</p>
                            <p className='space-x-5 opacity-50 text-sm font-semibold'> <span>Colour: Black</span> <span>Size: M </span></p>
                            <p>Seller: linaria</p>
                            <p>Price: ₹1899</p>
                        </div>
                    </div>
                </Grid>
                <Grid item>
                    <Box sx={{color: deepPurple[500]}}>
                        <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 text-5xl'/>
                        <span>Rate and review product</span>
                    </Box>
                </Grid>
            </Grid>)}
        </Grid>
        </div>
    </div>
  )
}

export default OrderDetails