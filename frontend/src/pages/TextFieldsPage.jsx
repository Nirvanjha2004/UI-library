import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedTextField from '../../../animated-mui-components/src/components/AnimatedTextField';

const TextFieldsPage = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (id) => (event) => {
    setValues(prev => ({
      ...prev,
      [id]: event.target.value
    }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const simulateError = (id) => {
    setErrors(prev => ({
      ...prev,
      [id]: 'This is a simulated error'
    }));
  };

  const textFieldExamples = [
    {
      title: 'Shake Animation on Error',
      component: (
        <AnimatedTextField
          fullWidth
          label="Shake on Error"
          value={values.shake || ''}
          onChange={handleChange('shake')}
          error={Boolean(errors.shake)}
          helperText={errors.shake}
          animation="shake"
          onBlur={() => simulateError('shake')}
        />
      ),
      code: `
<AnimatedTextField
  fullWidth
  label="Shake on Error"
  value={value}
  onChange={handleChange}
  error={Boolean(error)}
  helperText={error}
  animation="shake"
/>`
    },
    {
      title: 'Bounce Animation',
      component: (
        <AnimatedTextField
          fullWidth
          label="Bounce Animation"
          value={values.bounce || ''}
          onChange={handleChange('bounce')}
          animation="bounce"
          focusEffect="scale"
        />
      ),
      code: `
<AnimatedTextField
  fullWidth
  label="Bounce Animation"
  value={value}
  onChange={handleChange}
  animation="bounce"
  focusEffect="scale"
/>`
    },
    {
      title: 'Glow Animation',
      component: (
        <AnimatedTextField
          fullWidth
          label="Glow Animation"
          value={values.glow || ''}
          onChange={handleChange('glow')}
          animation="glow"
          focusEffect="glow"
        />
      ),
      code: `
<AnimatedTextField
  fullWidth
  label="Glow Animation"
  value={value}
  onChange={handleChange}
  animation="glow"
  focusEffect="glow"
/>`
    },
    {
      title: 'Highlight Animation',
      component: (
        <AnimatedTextField
          fullWidth
          label="Highlight Animation"
          value={values.highlight || ''}
          onChange={handleChange('highlight')}
          animation="highlight"
          focusEffect="lift"
        />
      ),
      code: `
<AnimatedTextField
  fullWidth
  label="Highlight Animation"
  value={value}
  onChange={handleChange}
  animation="highlight"
  focusEffect="lift"
/>`
    },
    {
      title: 'Password Field with Animation',
      component: (
        <AnimatedTextField
          fullWidth
          type="password"
          label="Password"
          value={values.password || ''}
          onChange={handleChange('password')}
          animation="shake"
          focusEffect="scale"
        />
      ),
      code: `
<AnimatedTextField
  fullWidth
  type="password"
  label="Password"
  value={value}
  onChange={handleChange}
  animation="shake"
  focusEffect="scale"
/>`
    },
    {
      title: 'Multiline TextField',
      component: (
        <AnimatedTextField
          fullWidth
          multiline
          rows={4}
          label="Multiline Text"
          value={values.multiline || ''}
          onChange={handleChange('multiline')}
          animation="glow"
          focusEffect="lift"
        />
      ),
      code: `
<AnimatedTextField
  fullWidth
  multiline
  rows={4}
  label="Multiline Text"
  value={value}
  onChange={handleChange}
  animation="glow"
  focusEffect="lift"
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
          Animated Text Fields
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your text fields with smooth animations and focus effects.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {textFieldExamples.map((example, index) => (
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

export default TextFieldsPage; 