import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import CodePreview from '../components/CodePreview/CodePreview';
import  AnimatedButton  from '../../../animated-mui-components/src/components/AnimatedButton';

const ButtonsPage = () => {
  const buttonExamples = [
    {
      title: 'Bounce Animation',
      component: (
        <AnimatedButton
          animation="bounce"
          variant="contained"
          color="primary"
        >
          Bounce
        </AnimatedButton>
      ),
      code: `
<AnimatedButton
  animation="bounce"
  variant="contained"
  color="primary"
>
  Bounce
</AnimatedButton>`
    },
    {
      title: 'Pulse Animation',
      component: (
        <AnimatedButton
          animation="pulse"
          variant="contained"
          color="secondary"
        >
          Pulse
        </AnimatedButton>
      ),
      code: `
<AnimatedButton
  animation="pulse"
  variant="contained"
  color="secondary"
>
  Pulse
</AnimatedButton>`
    },
    {
      title: 'Shake Animation',
      component: (
        <AnimatedButton
          animation="shake"
          variant="contained"
          color="error"
        >
          Shake
        </AnimatedButton>
      ),
      code: `
<AnimatedButton
  animation="shake"
  variant="contained"
  color="error"
>
  Shake
</AnimatedButton>`
    },
    {
      title: 'Ripple Animation',
      component: (
        <AnimatedButton
          animation="ripple"
          variant="contained"
          color="info"
        >
          Ripple
        </AnimatedButton>
      ),
      code: `
<AnimatedButton
  animation="ripple"
  variant="contained"
  color="info"
>
  Ripple
</AnimatedButton>`
    },
    {
      title: 'Slide Animation',
      component: (
        <AnimatedButton
          animation="slide"
          variant="contained"
          color="success"
        >
          Slide
        </AnimatedButton>
      ),
      code: `
<AnimatedButton
  animation="slide"
  variant="contained"
  color="success"
>
  Slide
</AnimatedButton>`
    },
    {
      title: 'Rotate Animation',
      component: (
        <AnimatedButton
          animation="rotate"
          variant="contained"
          color="warning"
        >
          Rotate
        </AnimatedButton>
      ),
      code: `
<AnimatedButton
  animation="rotate"
  variant="contained"
  color="warning"
>
  Rotate
</AnimatedButton>`
    }
  ];

  const hoverExamples = [
    {
      title: 'Grow on Hover',
      component: (
        <AnimatedButton
          hover="grow"
          variant="outlined"
          color="primary"
        >
          Hover to Grow
        </AnimatedButton>
      ),
      code: `
<AnimatedButton
  hover="grow"
  variant="outlined"
  color="primary"
>
  Hover to Grow
</AnimatedButton>`
    },
    {
      title: 'Shrink on Hover',
      component: (
        <AnimatedButton
          hover="shrink"
          variant="outlined"
          color="secondary"
        >
          Hover to Shrink
        </AnimatedButton>
      ),
      code: `
<AnimatedButton
  hover="shrink"
  variant="outlined"
  color="secondary"
>
  Hover to Shrink
</AnimatedButton>`
    },
    {
      title: 'Glow on Hover',
      component: (
        <AnimatedButton
          hover="glow"
          variant="outlined"
          color="info"
        >
          Hover to Glow
        </AnimatedButton>
      ),
      code: `
<AnimatedButton
  hover="glow"
  variant="outlined"
  color="info"
>
  Hover to Glow
</AnimatedButton>`
    },
    {
      title: 'Lift on Hover',
      component: (
        <AnimatedButton
          hover="lift"
          variant="outlined"
          color="success"
        >
          Hover to Lift
        </AnimatedButton>
      ),
      code: `
<AnimatedButton
  hover="lift"
  variant="outlined"
  color="success"
>
  Hover to Lift
</AnimatedButton>`
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
          Animated Buttons
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your buttons with smooth animations and hover effects.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Animation Examples
        </Typography>
        <Grid container spacing={4}>
          {buttonExamples.map((example, index) => (
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

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Hover Effects
        </Typography>
        <Grid container spacing={4}>
          {hoverExamples.map((example, index) => (
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

export default ButtonsPage; 