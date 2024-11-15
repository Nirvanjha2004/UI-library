import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import AnimatedInput from '../components/Inputs/AnimatedInput';
import CodePreview from '../components/CodePreview/CodePreview';

const InputsPage = () => {
  const inputExample = `
import { AnimatedInput } from 'your-ui-library';

function Example() {
  return (
    <AnimatedInput
      label="Username"
      placeholder="Enter your username"
      variant="outlined"
    />
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
          Inputs
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Beautiful, animated input components for your forms.
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" gutterBottom>
            Examples
          </Typography>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <AnimatedInput label="Standard Input" />
            </Grid>
            <Grid item xs={12} md={6}>
              <AnimatedInput
                label="Password"
                type="password"
                helperText="Enter your password"
              />
            </Grid>
          </Grid>
          <CodePreview code={inputExample} />
        </Box>
      </motion.div>
    </Container>
  );
};

export default InputsPage; 