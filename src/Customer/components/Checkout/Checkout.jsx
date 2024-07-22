import React, { useEffect, useMemo } from 'react';
import { styled } from '@mui/system';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';

const useStyles = styled((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Login', 'Delivery Address', 'Order Summary', 'Payment'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 0;
    case 1:
      return <DeliveryAddressForm/>;
    case 2:
      return <OrderSummary/>;
    default:
      return 'Unknown step';
  }
}

export default function Checkout() {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const querySearch = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const initialStep = parseInt(querySearch.get('step')) || 1;
  const [activeStep, setActiveStep] = React.useState(initialStep);
  const steps = getSteps();

  useEffect(() => {
    querySearch.set('step', activeStep);
    navigate({ search: querySearch.toString() });
  }, [activeStep, navigate, querySearch]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="py-10 lg:py-16">
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div className='flex justify-between p-2'>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className="text-gray"
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
