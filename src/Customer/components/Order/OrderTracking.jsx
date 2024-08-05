import { Label } from '@mui/icons-material'
import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'


const steps=[
    "Placed",
    "Confirmed",
    "Shipped",
    "Out for delivery",
    "Delivered"
]
const OrderTracking = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label)=><Step>
                <StepLabel sx={{color:"#9155FD", fontSize:"44px"}}>{label}</StepLabel>
            </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracking