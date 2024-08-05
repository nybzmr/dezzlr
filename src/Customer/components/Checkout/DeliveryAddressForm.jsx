import React from 'react'
import { Box, Button, Grid, TextField } from '@mui/material'
import AddressCard from '../AddressCard/AddressCard'
const DeliveryAddressForm = () => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address ={
      firstname:data.get("firstname"),
      lastname:data.get("lastname"),
      streetAdress:data.get("address"),
      city:data.get("city"),
      state:data.get("state"),
      zipCode:data.get("zip"),
      mobile:data.get("phoneNumber")
    }
    console.log(address)
  }
  return (
    <div className=''>
        <Grid container spacing={4} className='p-20' >
            <Grid item xs={12} lg={5} className='h-[30.5rem]'>
                <div className='p-7 border rounded-e-md shadow-md cursor-pointer overflow-y-scroll'>
                    <AddressCard/>
                    <Button sx={{mt:2}} size='large' variant='contained'>Deliver here</Button>
                </div>
            </Grid>
            <Grid item xs ={12} lg={7}>
                <Box className="border rounded-s-md shadow-md p-5">
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                      required
                      id='firstname'
                      name="firstname"
                      label="First Name"
                      fullWidth
                      autoComplete='given-name'/>            
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                      id='last  name'
                      name="lastname"
                      label="Last Name"
                      fullWidth
                      autoComplete='given-name'/>            
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                      required
                      id='address'
                      name="address"
                      label="Address"
                      fullWidth
                      autoComplete='given-name'
                      multiline
                      rows={4}/>              
                      
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                      required
                      id='city'
                      name="city"
                      label="City"
                      fullWidth
                      autoComplete='given-name'/>            
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                      required
                      id='state'
                      name="state"
                      label="State/Province"
                      fullWidth
                      autoComplete='given-name'/>            
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                      required
                      id='zip'
                      name="zip"
                      label="Zip/Postal Code"
                      fullWidth
                      autoComplete='shipping postal-code'/>            
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                      required
                      id='phoneNumber'
                      name="phoneNumber"
                      label="Phone Number"
                      fullWidth
                      autoComplete='given-name'/>            
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button
                      sx={{mt:2 }}
                      size='large'
                      variant='contained'
                      type='submit'
                      > 
                        Deliver here
                      </Button>          
                    </Grid>
                  </Grid>
                </form>
                </Box>
                
            </Grid>
        </Grid>

    </div>
  )
}

export default DeliveryAddressForm