import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import AnimatedButton from '../components/Buttons/AnimatedButton';
import CodePreview from '../components/CodePreview/CodePreview';

const ButtonsPage = () => {
  const buttonExample = `
import { AnimatedButton } from 'your-ui-library';

// Basic Button
<AnimatedButton>Default Button</AnimatedButton>

// Primary Button
<AnimatedButton variant="contained" color="primary">
  Primary Button
</AnimatedButton>

// Secondary Button
<AnimatedButton variant="contained" color="secondary">
  Secondary Button
</AnimatedButton>`;

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1" gutterBottom>
          Buttons
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Beautiful, animated button components with various styles.
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" gutterBottom>
            Basic Usage
          </Typography>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item>
              <AnimatedButton>Default</AnimatedButton>
            </Grid>
            <Grid item>
              <AnimatedButton variant="contained" color="primary">
                Primary
              </AnimatedButton>
            </Grid>
            <Grid item>
              <AnimatedButton variant="contained" color="secondary">
                Secondary
              </AnimatedButton>
            </Grid>
          </Grid>
          <CodePreview code={buttonExample} />
        </Box>
      </motion.div>
    </Container>
  );
};

export default ButtonsPage; 