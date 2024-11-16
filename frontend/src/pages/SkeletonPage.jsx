import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedSkeleton from '../../../animated-mui-components/src/components/AnimatedSkeleton';

const SkeletonPage = () => {
  const skeletonExamples = [
    {
      title: 'Text Skeleton with Pulse Animation',
      component: (
        <Box sx={{ width: '100%' }}>
          <AnimatedSkeleton
            animation="pulse"
            variant="text"
            width="80%"
          />
          <AnimatedSkeleton
            animation="pulse"
            variant="text"
            width="60%"
          />
          <AnimatedSkeleton
            animation="pulse"
            variant="text"
            width="70%"
          />
        </Box>
      ),
      code: `
<Box sx={{ width: '100%' }}>
  <AnimatedSkeleton
    animation="pulse"
    variant="text"
    width="80%"
  />
  <AnimatedSkeleton
    animation="pulse"
    variant="text"
    width="60%"
  />
  <AnimatedSkeleton
    animation="pulse"
    variant="text"
    width="70%"
  />
</Box>`
    },
    {
      title: 'Wave Animation',
      component: (
        <AnimatedSkeleton
          animation="wave"
          variant="rectangular"
          height={200}
        />
      ),
      code: `
<AnimatedSkeleton
  animation="wave"
  variant="rectangular"
  height={200}
/>`
    },
    {
      title: 'Circular Skeleton with Shimmer',
      component: (
        <AnimatedSkeleton
          animation="shimmer"
          variant="circular"
          width={80}
          height={80}
        />
      ),
      code: `
<AnimatedSkeleton
  animation="shimmer"
  variant="circular"
  width={80}
  height={80}
/>`
    },
    {
      title: 'Blink Animation',
      component: (
        <AnimatedSkeleton
          animation="blink"
          variant="rounded"
          height={100}
        />
      ),
      code: `
<AnimatedSkeleton
  animation="blink"
  variant="rounded"
  height={100}
/>`
    },
    {
      title: 'Card Loading Skeleton',
      component: (
        <Box sx={{ width: '100%' }}>
          <AnimatedSkeleton
            animation="wave"
            variant="rectangular"
            height={140}
          />
          <Box sx={{ pt: 1 }}>
            <AnimatedSkeleton
              animation="wave"
              variant="text"
              width="80%"
            />
            <AnimatedSkeleton
              animation="wave"
              variant="text"
              width="60%"
            />
          </Box>
        </Box>
      ),
      code: `
<Box sx={{ width: '100%' }}>
  <AnimatedSkeleton
    animation="wave"
    variant="rectangular"
    height={140}
  />
  <Box sx={{ pt: 1 }}>
    <AnimatedSkeleton
      animation="wave"
      variant="text"
      width="80%"
    />
    <AnimatedSkeleton
      animation="wave"
      variant="text"
      width="60%"
    />
  </Box>
</Box>`
    },
    {
      title: 'Custom Style Skeleton',
      component: (
        <AnimatedSkeleton
          animation="shimmer"
          variant="rounded"
          height={100}
          customStyle={{
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderRadius: 16
          }}
        />
      ),
      code: `
<AnimatedSkeleton
  animation="shimmer"
  variant="rounded"
  height={100}
  customStyle={{
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 16
  }}
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
          Animated Skeletons
        </Typography>
        <Typography variant="body1" paragraph>
          Loading placeholders with smooth animations.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {skeletonExamples.map((example, index) => (
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

export default SkeletonPage; 