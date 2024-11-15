import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import AnimatedForm from '../components/Form/AnimatedForm';
import CodePreview from '../components/CodePreview/CodePreview';
import { useToast } from '../App';
import { useState } from 'react';

const FormPage = () => {
  const { showToast } = useToast();
  
  // Define initial form state
  const initialFormState = {
    username: '',
    email: '',
    password: '',
  };

  const [formValues, setFormValues] = useState(initialFormState);

  const formFields = [
    {
      name: 'username',
      label: 'Username *',
      type: 'text',
      required: true,
      autoComplete: 'username',
      helperText: 'Enter your username',
    },
    {
      name: 'email',
      label: 'Email *',
      type: 'email',
      required: true,
      autoComplete: 'email',
      helperText: 'Enter your email address',
    },
    {
      name: 'password',
      label: 'Password *',
      type: 'password',
      required: true,
      autoComplete: 'new-password',
      helperText: 'Enter your password',
    },
  ];

  const validationSchema = {
    username: Yup.string()
      .min(3, 'Username must be at least 3 characters')
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Update form values
    setFormValues(values);
    
    setTimeout(() => {
      console.log('Form values:', values);
      showToast('Form submitted successfully!', 'success');
      setSubmitting(false);
      // Don't reset the form
    }, 1000);
  };

  const formExample = `
import { AnimatedForm } from 'your-ui-library';
import * as Yup from 'yup';

const formFields = [
  {
    name: 'username',
    label: 'Username',
    required: true,
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
  },
];

const validationSchema = {
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
};

<AnimatedForm
  fields={formFields}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
  submitLabel="Submit"
/>`;

  return (
    <Container maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1" gutterBottom>
          Form Components
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Animated form components with validation and error handling.
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" gutterBottom>
            Registration Form
          </Typography>
          <AnimatedForm
            fields={formFields}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            initialValues={formValues}
            submitLabel="Register"
            enableReinitialize={false}
          />
          <Box sx={{ mt: 4 }}>
            <CodePreview code={formExample} />
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default FormPage; 