import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedTextField from '../../../animated-mui-components/src/components/AnimatedTextField';

const FormPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
    }
  };

  const formExamples = [
    {
      title: 'Basic Form with Animations',
      component: (
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <AnimatedTextField
            fullWidth
            label="Username"
            value={formData.username}
            onChange={handleChange('username')}
            error={Boolean(errors.username)}
            helperText={errors.username}
            animation="glow"
            sx={{ mb: 2 }}
          />
          <AnimatedTextField
            fullWidth
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            error={Boolean(errors.email)}
            helperText={errors.email}
            animation="glow"
            sx={{ mb: 2 }}
          />
          <AnimatedTextField
            fullWidth
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange('password')}
            error={Boolean(errors.password)}
            helperText={errors.password}
            animation="glow"
            sx={{ mb: 2 }}
          />
          <Button 
            variant="contained" 
            color="primary" 
            type="submit"
            fullWidth
          >
            Submit
          </Button>
        </Box>
      ),
      code: `
const [formData, setFormData] = useState({
  username: '',
  email: '',
  password: ''
});

const [errors, setErrors] = useState({});

const handleChange = (field) => (event) => {
  setFormData(prev => ({
    ...prev,
    [field]: event.target.value
  }));
};

<Box component="form" onSubmit={handleSubmit}>
  <AnimatedTextField
    fullWidth
    label="Username"
    value={formData.username}
    onChange={handleChange('username')}
    error={Boolean(errors.username)}
    helperText={errors.username}
    animation="glow"
  />
  <AnimatedTextField
    fullWidth
    label="Email"
    type="email"
    value={formData.email}
    onChange={handleChange('email')}
    error={Boolean(errors.email)}
    helperText={errors.email}
    animation="glow"
  />
  <AnimatedTextField
    fullWidth
    label="Password"
    type="password"
    value={formData.password}
    onChange={handleChange('password')}
    error={Boolean(errors.password)}
    helperText={errors.password}
    animation="glow"
  />
  <Button 
    variant="contained" 
    color="primary" 
    type="submit"
    fullWidth
  >
    Submit
  </Button>
</Box>`
    },
    {
      title: 'Error Animation Example',
      component: (
        <AnimatedTextField
          fullWidth
          label="Error Example"
          error
          helperText="This field has an error"
          defaultValue="Invalid input"
        />
      ),
      code: `
<AnimatedTextField
  fullWidth
  label="Error Example"
  error
  helperText="This field has an error"
  defaultValue="Invalid input"
/>`
    },
    {
      title: 'Bounce Animation',
      component: (
        <AnimatedTextField
          fullWidth
          label="Bounce Animation"
          animation="bounce"
          placeholder="Focus to see animation"
        />
      ),
      code: `
<AnimatedTextField
  fullWidth
  label="Bounce Animation"
  animation="bounce"
  placeholder="Focus to see animation"
/>`
    },
    {
      title: 'Glow Animation',
      component: (
        <AnimatedTextField
          fullWidth
          label="Glow Animation"
          animation="glow"
          placeholder="Focus to see animation"
        />
      ),
      code: `
<AnimatedTextField
  fullWidth
  label="Glow Animation"
  animation="glow"
  placeholder="Focus to see animation"
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
          Animated Forms
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your forms with smooth animations and interactive effects.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {formExamples.map((example, index) => (
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

export default FormPage; 