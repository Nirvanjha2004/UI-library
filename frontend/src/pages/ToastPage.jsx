import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedToast from '../../../animated-mui-components/src/components/AnimatedToast';

const ToastPage = () => {
  const [toasts, setToasts] = useState({});

  const showToast = (id) => {
    setToasts(prev => ({
      ...prev,
      [id]: true
    }));
    setTimeout(() => {
      setToasts(prev => ({
        ...prev,
        [id]: false
      }));
    }, 3000);
  };

  const toastExamples = [
    {
      title: 'Success Toast with Slide Right',
      component: (
        <>
          <Button 
            variant="contained" 
            color="success"
            onClick={() => showToast('success')}
          >
            Show Success Toast
          </Button>
          <AnimatedToast
            open={toasts['success'] || false}
            onClose={() => setToasts(prev => ({ ...prev, success: false }))}
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
      title: 'Error Toast with Slide Left',
      component: (
        <>
          <Button 
            variant="contained" 
            color="error"
            onClick={() => showToast('error')}
          >
            Show Error Toast
          </Button>
          <AnimatedToast
            open={toasts['error'] || false}
            onClose={() => setToasts(prev => ({ ...prev, error: false }))}
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
      title: 'Warning Toast with Slide Up',
      component: (
        <>
          <Button 
            variant="contained" 
            color="warning"
            onClick={() => showToast('warning')}
          >
            Show Warning Toast
          </Button>
          <AnimatedToast
            open={toasts['warning'] || false}
            onClose={() => setToasts(prev => ({ ...prev, warning: false }))}
            message="Please proceed with caution!"
            severity="warning"
            animation="slideUp"
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
  animation="slideUp"
  variant="outlined"
/>`
    },
    {
      title: 'Info Toast with Scale',
      component: (
        <>
          <Button 
            variant="contained" 
            color="info"
            onClick={() => showToast('info')}
          >
            Show Info Toast
          </Button>
          <AnimatedToast
            open={toasts['info'] || false}
            onClose={() => setToasts(prev => ({ ...prev, info: false }))}
            message="Here's some useful information."
            severity="info"
            animation="scale"
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
  animation="scale"
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
          Animated Toasts
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your notifications with smooth animations and transitions.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {toastExamples.map((example, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  {example.title}
                </Typography>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
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

export default ToastPage; 