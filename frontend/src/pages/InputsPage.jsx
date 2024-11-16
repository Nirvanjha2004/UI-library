import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedTextField from '../../../animated-mui-components/src/components/AnimatedTextField';

const InputsPage = () => {
  const inputExamples = [
    {
      title: 'Shake Animation (Error)',
      component: (
        <AnimatedTextField
          error
          label="Error Input"
          helperText="This field is required"
          fullWidth
        />
      ),
      code: `
<AnimatedTextField
  error
  label="Error Input"
  helperText="This field is required"
  fullWidth
/>`
    },
    {
      title: 'Bounce Animation',
      component: (
        <AnimatedTextField
          animation="bounce"
          label="Bounce Input"
          placeholder="Type something..."
          fullWidth
        />
      ),
      code: `
<AnimatedTextField
  animation="bounce"
  label="Bounce Input"
  placeholder="Type something..."
  fullWidth
/>`
    },
    {
      title: 'Glow Animation',
      component: (
        <AnimatedTextField
          animation="glow"
          label="Glow Input"
          placeholder="Focus to see glow effect"
          fullWidth
        />
      ),
      code: `
<AnimatedTextField
  animation="glow"
  label="Glow Input"
  placeholder="Focus to see glow effect"
  fullWidth
/>`
    }
  ];

  const variantExamples = [
    {
      title: 'Outlined Variant',
      component: (
        <AnimatedTextField
          variant="outlined"
          label="Outlined Input"
          animation="glow"
          fullWidth
        />
      ),
      code: `
<AnimatedTextField
  variant="outlined"
  label="Outlined Input"
  animation="glow"
  fullWidth
/>`
    },
    {
      title: 'Filled Variant',
      component: (
        <AnimatedTextField
          variant="filled"
          label="Filled Input"
          animation="glow"
          fullWidth
        />
      ),
      code: `
<AnimatedTextField
  variant="filled"
  label="Filled Input"
  animation="glow"
  fullWidth
/>`
    },
    {
      title: 'Standard Variant',
      component: (
        <AnimatedTextField
          variant="standard"
          label="Standard Input"
          animation="glow"
          fullWidth
        />
      ),
      code: `
<AnimatedTextField
  variant="standard"
  label="Standard Input"
  animation="glow"
  fullWidth
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
          Animated Inputs
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your form inputs with smooth animations and interactive effects.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Animation Examples
        </Typography>
        <Grid container spacing={4}>
          {inputExamples.map((example, index) => (
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
          Variants
        </Typography>
        <Grid container spacing={4}>
          {variantExamples.map((example, index) => (
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

export default InputsPage; 