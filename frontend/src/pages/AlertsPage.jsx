import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedToast from '../../../animated-mui-components/src/components/AnimatedToast';

const AlertsPage = () => {
  const [alerts, setAlerts] = useState({});

  const showAlert = (id) => {
    setAlerts(prev => ({
      ...prev,
      [id]: true
    }));
  };

  const hideAlert = (id) => {
    setAlerts(prev => ({
      ...prev,
      [id]: false
    }));
  };

  const alertExamples = [
    {
      title: 'Success Alert with Slide Right',
      component: (
        <>
          <Button 
            variant="contained" 
            color="success"
            onClick={() => showAlert('success')}
          >
            Show Success Alert
          </Button>
          <AnimatedToast
            open={alerts['success'] || false}
            onClose={() => hideAlert('success')}
            message="Operation completed successfully!"
            severity="success"
            animation="slideRight"
            variant="filled"
          />
        </>
      ),
      code: `
<AnimatedToast
  open={open}
  onClose={handleClose}
  message="Operation completed successfully!"
  severity="success"
  animation="slideRight"
  variant="filled"
/>`
    },
    {
      title: 'Error Alert with Slide Left',
      component: (
        <>
          <Button 
            variant="contained" 
            color="error"
            onClick={() => showAlert('error')}
          >
            Show Error Alert
          </Button>
          <AnimatedToast
            open={alerts['error'] || false}
            onClose={() => hideAlert('error')}
            message="An error occurred!"
            severity="error"
            animation="slideLeft"
            variant="filled"
          />
        </>
      ),
      code: `
<AnimatedToast
  open={open}
  onClose={handleClose}
  message="An error occurred!"
  severity="error"
  animation="slideLeft"
  variant="filled"
/>`
    },
    {
      title: 'Warning Alert with Scale Animation',
      component: (
        <>
          <Button 
            variant="contained" 
            color="warning"
            onClick={() => showAlert('warning')}
          >
            Show Warning Alert
          </Button>
          <AnimatedToast
            open={alerts['warning'] || false}
            onClose={() => hideAlert('warning')}
            message="Please proceed with caution!"
            severity="warning"
            animation="scale"
            variant="outlined"
          />
        </>
      ),
      code: `
<AnimatedToast
  open={open}
  onClose={handleClose}
  message="Please proceed with caution!"
  severity="warning"
  animation="scale"
  variant="outlined"
/>`
    },
    {
      title: 'Info Alert with Fade Animation',
      component: (
        <>
          <Button 
            variant="contained" 
            color="info"
            onClick={() => showAlert('info')}
          >
            Show Info Alert
          </Button>
          <AnimatedToast
            open={alerts['info'] || false}
            onClose={() => hideAlert('info')}
            message="Here's some useful information."
            severity="info"
            animation="fade"
            variant="standard"
          />
        </>
      ),
      code: `
<AnimatedToast
  open={open}
  onClose={handleClose}
  message="Here's some useful information."
  severity="info"
  animation="fade"
  variant="standard"
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
          Animated Alerts
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your alerts with smooth animations and transitions.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {alertExamples.map((example, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  {example.title}
                </Typography>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}>
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

export default AlertsPage; 