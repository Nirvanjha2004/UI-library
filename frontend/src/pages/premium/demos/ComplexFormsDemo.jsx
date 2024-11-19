import { Container, Typography, Grid, Box, Paper, Button, TextField, Stepper, Step, StepLabel, FormControlLabel, Checkbox, Radio, RadioGroup, FormControl, FormLabel } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedButton from '../../../../../animated-mui-components/src/components/AnimatedButton';
import AnimatedTextField from '../../../../../animated-mui-components/src/components/AnimatedTextField';

const steps = ['Personal Info', 'Contact Details', 'Preferences', 'Review'];

const ComplexFormsDemo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    preferences: [],
    notifications: 'email'
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });
  };

  const handlePreferenceChange = (event) => {
    const { value, checked } = event.target;
    setFormData(prev => ({
      ...prev,
      preferences: checked 
        ? [...prev.preferences, value]
        : prev.preferences.filter(p => p !== value)
    }));
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <AnimatedTextField
                fullWidth
                label="First Name"
                value={formData.firstName}
                onChange={handleInputChange('firstName')}
                animation="slide"
                focusEffect="glow"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <AnimatedTextField
                fullWidth
                label="Last Name"
                value={formData.lastName}
                onChange={handleInputChange('lastName')}
                animation="slide"
                focusEffect="glow"
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <AnimatedTextField
                fullWidth
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                animation="slide"
                focusEffect="glow"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <AnimatedTextField
                fullWidth
                label="Phone"
                value={formData.phone}
                onChange={handleInputChange('phone')}
                animation="slide"
                focusEffect="glow"
              />
            </Grid>
            <Grid item xs={12}>
              <AnimatedTextField
                fullWidth
                label="Address"
                multiline
                rows={4}
                value={formData.address}
                onChange={handleInputChange('address')}
                animation="slide"
                focusEffect="glow"
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Preferences</FormLabel>
                <Box sx={{ mt: 2 }}>
                  {['Newsletter', 'Product Updates', 'Marketing Emails'].map((pref) => (
                    <FormControlLabel
                      key={pref}
                      control={
                        <Checkbox
                          checked={formData.preferences.includes(pref)}
                          onChange={handlePreferenceChange}
                          value={pref}
                        />
                      }
                      label={pref}
                    />
                  ))}
                </Box>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Notification Preference</FormLabel>
                <RadioGroup
                  value={formData.notifications}
                  onChange={handleInputChange('notifications')}
                >
                  <FormControlLabel value="email" control={<Radio />} label="Email" />
                  <FormControlLabel value="sms" control={<Radio />} label="SMS" />
                  <FormControlLabel value="both" control={<Radio />} label="Both" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        );
      case 3:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>Review Your Information</Typography>
            <Paper sx={{ p: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="subtitle2">First Name:</Typography>
                  <Typography>{formData.firstName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2">Last Name:</Typography>
                  <Typography>{formData.lastName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2">Email:</Typography>
                  <Typography>{formData.email}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2">Phone:</Typography>
                  <Typography>{formData.phone}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2">Address:</Typography>
                  <Typography>{formData.address}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2">Preferences:</Typography>
                  <Typography>{formData.preferences.join(', ')}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2">Notification Preference:</Typography>
                  <Typography>{formData.notifications}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" gutterBottom>
          Complex Form Demo
        </Typography>
        <Paper sx={{ p: 4, mt: 4 }}>
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box sx={{ mt: 4, mb: 4 }}>
            {getStepContent(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <AnimatedButton
              disabled={activeStep === 0}
              onClick={handleBack}
              animation="slide"
              variant="outlined"
            >
              Back
            </AnimatedButton>
            <AnimatedButton
              variant="contained"
              onClick={activeStep === steps.length - 1 ? undefined : handleNext}
              animation="slide"
            >
              {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
            </AnimatedButton>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default ComplexFormsDemo; 