import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedAlert from '../components/Alerts/AnimatedAlert';
import CodePreview from '../components/CodePreview/CodePreview';

const AlertsPage = () => {
  const [showSuccess, setShowSuccess] = useState(true);
  const [showError, setShowError] = useState(true);

  const alertExample = `
import { AnimatedAlert } from 'your-ui-library';

function Example() {
  const [show, setShow] = useState(true);
  
  return (
    <AnimatedAlert 
      severity="success" 
      show={show}
      onClose={() => setShow(false)}
    >
      This is a success alert!
    </AnimatedAlert>
  );
}`;

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1" gutterBottom>
          Alerts
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Animated alert components for displaying messages and notifications.
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" gutterBottom>
            Examples
          </Typography>
          <Box sx={{ mb: 4 }}>
            <AnimatedAlert 
              severity="success" 
              show={showSuccess}
              onClose={() => setShowSuccess(false)}
            >
              This is a success alert — check it out!
            </AnimatedAlert>
            <AnimatedAlert 
              severity="error" 
              show={showError}
              onClose={() => setShowError(false)}
            >
              This is an error alert — check it out!
            </AnimatedAlert>
            <AnimatedAlert severity="warning">
              This is a warning alert — check it out!
            </AnimatedAlert>
            <AnimatedAlert severity="info">
              This is an info alert — check it out!
            </AnimatedAlert>
          </Box>
          <Button 
            variant="contained" 
            onClick={() => {
              setShowSuccess(true);
              setShowError(true);
            }}
            sx={{ mb: 4 }}
          >
            Reset Alerts
          </Button>
          <CodePreview code={alertExample} />
        </Box>
      </motion.div>
    </Container>
  );
};

export default AlertsPage; 