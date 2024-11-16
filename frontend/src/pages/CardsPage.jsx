import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedCard from '../../../animated-mui-components/src/components/AnimatedCard';

const CardsPage = () => {
  const cardExamples = [
    {
      title: 'Fade Animation',
      component: (
        <AnimatedCard
          animation="fade"
          hover="lift"
        >
          <Typography variant="h5">Fade Card</Typography>
          <Typography>This card fades in smoothly</Typography>
        </AnimatedCard>
      ),
      code: `
<AnimatedCard
  animation="fade"
  hover="lift"
>
  <Typography variant="h5">Fade Card</Typography>
  <Typography>This card fades in smoothly</Typography>
</AnimatedCard>`
    },
    {
      title: 'Slide Up Animation',
      component: (
        <AnimatedCard
          animation="slideUp"
          hover="grow"
        >
          <Typography variant="h5">Slide Up Card</Typography>
          <Typography>This card slides up into view</Typography>
        </AnimatedCard>
      ),
      code: `
<AnimatedCard
  animation="slideUp"
  hover="grow"
>
  <Typography variant="h5">Slide Up Card</Typography>
  <Typography>This card slides up into view</Typography>
</AnimatedCard>`
    },
    {
      title: 'Scale Animation',
      component: (
        <AnimatedCard
          animation="scale"
          hover="glow"
        >
          <Typography variant="h5">Scale Card</Typography>
          <Typography>This card scales into view</Typography>
        </AnimatedCard>
      ),
      code: `
<AnimatedCard
  animation="scale"
  hover="glow"
>
  <Typography variant="h5">Scale Card</Typography>
  <Typography>This card scales into view</Typography>
</AnimatedCard>`
    },
    {
      title: 'Flip Animation',
      component: (
        <AnimatedCard
          animation="flip"
          hover="tilt"
        >
          <Typography variant="h5">Flip Card</Typography>
          <Typography>This card flips into view</Typography>
        </AnimatedCard>
      ),
      code: `
<AnimatedCard
  animation="flip"
  hover="tilt"
>
  <Typography variant="h5">Flip Card</Typography>
  <Typography>This card flips into view</Typography>
</AnimatedCard>`
    }
  ];

  const hoverExamples = [
    {
      title: 'Lift on Hover',
      component: (
        <AnimatedCard
          animation="fade"
          hover="lift"
        >
          <Typography variant="h5">Hover to Lift</Typography>
          <Typography>Card lifts up on hover</Typography>
        </AnimatedCard>
      ),
      code: `
<AnimatedCard
  animation="fade"
  hover="lift"
>
  <Typography variant="h5">Hover to Lift</Typography>
  <Typography>Card lifts up on hover</Typography>
</AnimatedCard>`
    },
    {
      title: 'Grow on Hover',
      component: (
        <AnimatedCard
          animation="fade"
          hover="grow"
        >
          <Typography variant="h5">Hover to Grow</Typography>
          <Typography>Card scales up on hover</Typography>
        </AnimatedCard>
      ),
      code: `
<AnimatedCard
  animation="fade"
  hover="grow"
>
  <Typography variant="h5">Hover to Grow</Typography>
  <Typography>Card scales up on hover</Typography>
</AnimatedCard>`
    },
    {
      title: 'Glow on Hover',
      component: (
        <AnimatedCard
          animation="fade"
          hover="glow"
        >
          <Typography variant="h5">Hover to Glow</Typography>
          <Typography>Card glows on hover</Typography>
        </AnimatedCard>
      ),
      code: `
<AnimatedCard
  animation="fade"
  hover="glow"
>
  <Typography variant="h5">Hover to Glow</Typography>
  <Typography>Card glows on hover</Typography>
</AnimatedCard>`
    },
    {
      title: 'Tilt on Hover',
      component: (
        <AnimatedCard
          animation="fade"
          hover="tilt"
        >
          <Typography variant="h5">Hover to Tilt</Typography>
          <Typography>Card tilts on hover</Typography>
        </AnimatedCard>
      ),
      code: `
<AnimatedCard
  animation="fade"
  hover="tilt"
>
  <Typography variant="h5">Hover to Tilt</Typography>
  <Typography>Card tilts on hover</Typography>
</AnimatedCard>`
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
          Animated Cards
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your cards with smooth animations and hover effects.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Animation Examples
        </Typography>
        <Grid container spacing={4}>
          {cardExamples.map((example, index) => (
            <Grid item xs={12} md={6} key={index}>
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

export default CardsPage; 