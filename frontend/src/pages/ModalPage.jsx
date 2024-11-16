import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedModal from '../../../animated-mui-components/src/components/AnimatedModal';

const ModalPage = () => {
  const [modals, setModals] = useState({});

  const handleOpen = (id) => {
    setModals(prev => ({
      ...prev,
      [id]: true
    }));
  };

  const handleClose = (id) => {
    setModals(prev => ({
      ...prev,
      [id]: false
    }));
  };

  const modalExamples = [
    {
      title: 'Scale Animation',
      component: (
        <>
          <Button 
            variant="contained" 
            onClick={() => handleOpen('scale')}
          >
            Open Scale Modal
          </Button>
          <AnimatedModal
            open={modals['scale'] || false}
            onClose={() => handleClose('scale')}
            animation="scale"
          >
            <Typography variant="h5" gutterBottom>Scale Modal</Typography>
            <Typography>This modal scales in and out smoothly.</Typography>
          </AnimatedModal>
        </>
      ),
      code: `
<AnimatedModal
  open={open}
  onClose={handleClose}
  animation="scale"
>
  <Typography variant="h5" gutterBottom>Scale Modal</Typography>
  <Typography>This modal scales in and out smoothly.</Typography>
</AnimatedModal>`
    },
    {
      title: 'Fade Animation',
      component: (
        <>
          <Button 
            variant="contained" 
            color="secondary"
            onClick={() => handleOpen('fade')}
          >
            Open Fade Modal
          </Button>
          <AnimatedModal
            open={modals['fade'] || false}
            onClose={() => handleClose('fade')}
            animation="fade"
          >
            <Typography variant="h5" gutterBottom>Fade Modal</Typography>
            <Typography>This modal fades in and out.</Typography>
          </AnimatedModal>
        </>
      ),
      code: `
<AnimatedModal
  open={open}
  onClose={handleClose}
  animation="fade"
>
  <Typography variant="h5" gutterBottom>Fade Modal</Typography>
  <Typography>This modal fades in and out.</Typography>
</AnimatedModal>`
    },
    {
      title: 'Slide Up Animation',
      component: (
        <>
          <Button 
            variant="contained" 
            color="success"
            onClick={() => handleOpen('slideUp')}
          >
            Open Slide Up Modal
          </Button>
          <AnimatedModal
            open={modals['slideUp'] || false}
            onClose={() => handleClose('slideUp')}
            animation="slideUp"
          >
            <Typography variant="h5" gutterBottom>Slide Up Modal</Typography>
            <Typography>This modal slides up into view.</Typography>
          </AnimatedModal>
        </>
      ),
      code: `
<AnimatedModal
  open={open}
  onClose={handleClose}
  animation="slideUp"
>
  <Typography variant="h5" gutterBottom>Slide Up Modal</Typography>
  <Typography>This modal slides up into view.</Typography>
</AnimatedModal>`
    },
    {
      title: 'Flip Animation',
      component: (
        <>
          <Button 
            variant="contained" 
            color="warning"
            onClick={() => handleOpen('flip')}
          >
            Open Flip Modal
          </Button>
          <AnimatedModal
            open={modals['flip'] || false}
            onClose={() => handleClose('flip')}
            animation="flip"
          >
            <Typography variant="h5" gutterBottom>Flip Modal</Typography>
            <Typography>This modal flips into view.</Typography>
          </AnimatedModal>
        </>
      ),
      code: `
<AnimatedModal
  open={open}
  onClose={handleClose}
  animation="flip"
>
  <Typography variant="h5" gutterBottom>Flip Modal</Typography>
  <Typography>This modal flips into view.</Typography>
</AnimatedModal>`
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
          Animated Modals
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your modals with smooth animations and transitions.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Animation Examples
        </Typography>
        <Grid container spacing={4}>
          {modalExamples.map((example, index) => (
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

export default ModalPage; 