import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-4 shadow-md hover:shadow-xl hover:transition my-5'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://rukminim1.flixcart.com/image/612/612/xif0q/jean/d/s/c/36-mj-bk-pl-48-comfits-original-imagqbrnyjfzhs8v.jpeg?q=70'></img>
                    <div  className='ml-5 space-y-2'>
                        <p className='font-semibold'>
                            Men slim Mid Rise Black Jeans
                        </p>
                        <p className='opacity-50 text-xs font-semibold '>
                            Size: M
                        </p>
                        <p className='opacity-50 text-xs font-semibold '>
                            Color: Black
                        </p>
                    </div>    
                </div>
            </Grid>    
            <Grid item xs={2}>
                <p className='font-semibold'>₹1899</p>
            </Grid>
            <Grid item xs={4}>
                {true && <div>
                    <p>
                    <AdjustIcon sx={{width:'20px', height:'20px'}} className='text-green-600 mr-2 text-sm'/>
                    <span className='font-semibold'>Delivered on March 03</span>
                </p>  
                <p className='text-xs opacity-50'>

                Your item has been delivered.
                </p>  
                </div>}
                {false && <p>
                   <span>
                    Expected delivery on Mar 03 
                   </span> 
                </p>}

            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard