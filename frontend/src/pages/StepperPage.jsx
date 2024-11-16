import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedStepper from '../../../animated-mui-components/src/components/AnimatedStepper';

const StepperPage = () => {
  const [activeStep, setActiveStep] = useState({});

  const handleNext = (id) => {
    setActiveStep(prev => ({
      ...prev,
      [id]: Math.min((prev[id] || 0) + 1, 2)
    }));
  };

  const handleBack = (id) => {
    setActiveStep(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0)
    }));
  };

  const steps = [
    {
      label: 'Step 1',
      content: 'Content for step 1'
    },
    {
      label: 'Step 2',
      content: 'Content for step 2'
    },
    {
      label: 'Step 3',
      content: 'Content for step 3'
    }
  ];

  const stepperExamples = [
    {
      title: 'Fade Animation',
      component: (
        <Box>
          <AnimatedStepper
            activeStep={activeStep.fade || 0}
            steps={steps}
            animation="fade"
          />
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              disabled={activeStep.fade === 0}
              onClick={() => handleBack('fade')}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={() => handleNext('fade')}
              disabled={activeStep.fade === 2}
            >
              Next
            </Button>
          </Box>
        </Box>
      ),
      code: `
<AnimatedStepper
  activeStep={activeStep}
  steps={[
    { label: 'Step 1', content: 'Content for step 1' },
    { label: 'Step 2', content: 'Content for step 2' },
    { label: 'Step 3', content: 'Content for step 3' }
  ]}
  animation="fade"
/>`
    },
    {
      title: 'Slide Animation',
      component: (
        <Box>
          <AnimatedStepper
            activeStep={activeStep.slide || 0}
            steps={steps}
            animation="slide"
          />
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              disabled={activeStep.slide === 0}
              onClick={() => handleBack('slide')}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={() => handleNext('slide')}
              disabled={activeStep.slide === 2}
            >
              Next
            </Button>
          </Box>
        </Box>
      ),
      code: `
<AnimatedStepper
  activeStep={activeStep}
  steps={steps}
  animation="slide"
/>`
    },
    {
      title: 'Scale Animation',
      component: (
        <Box>
          <AnimatedStepper
            activeStep={activeStep.scale || 0}
            steps={steps}
            animation="scale"
          />
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              disabled={activeStep.scale === 0}
              onClick={() => handleBack('scale')}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={() => handleNext('scale')}
              disabled={activeStep.scale === 2}
            >
              Next
            </Button>
          </Box>
        </Box>
      ),
      code: `
<AnimatedStepper
  activeStep={activeStep}
  steps={steps}
  animation="scale"
/>`
    },
    {
      title: 'Vertical Stepper with Stagger Animation',
      component: (
        <Box>
          <AnimatedStepper
            activeStep={activeStep.stagger || 0}
            steps={steps}
            animation="stagger"
            orientation="vertical"
            staggerDelay={0.1}
          />
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              disabled={activeStep.stagger === 0}
              onClick={() => handleBack('stagger')}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={() => handleNext('stagger')}
              disabled={activeStep.stagger === 2}
            >
              Next
            </Button>
          </Box>
        </Box>
      ),
      code: `
<AnimatedStepper
  activeStep={activeStep}
  steps={steps}
  animation="stagger"
  orientation="vertical"
  staggerDelay={0.1}
/>`
    }
  ];

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1" gutterBottom>
          Animated Steppers
        </Typography>
        <Typography variant="body1" paragraph>
          Guide users through steps with smooth animations.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {stepperExamples.map((example, index) => (
            <Grid item xs={12} key={index}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  {example.title}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {example.component}
                </Box>
                <CodePreview code={example.code} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default StepperPage; 