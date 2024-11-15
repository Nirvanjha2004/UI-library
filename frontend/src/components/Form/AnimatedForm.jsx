import { Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AnimatedFormField from './AnimatedFormField';

const StyledForm = styled(motion.form)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const formVariants = {
  initial: { 
    opacity: 0,
    y: 20 
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const AnimatedForm = ({ 
  fields,
  onSubmit,
  validationSchema,
  initialValues = {},
  submitLabel = 'Submit',
  ...props 
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchema),
    onSubmit: (values, { setSubmitting }) => {
      onSubmit(values, { setSubmitting });
    },
  });

  return (
    <StyledForm
      variants={formVariants}
      initial="initial"
      animate="animate"
      onSubmit={formik.handleSubmit}
      {...props}
    >
      {fields.map((field) => (
        <AnimatedFormField
          key={field.name}
          {...field}
          value={formik.values[field.name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched[field.name] && formik.errors[field.name]
              ? formik.errors[field.name]
              : undefined
          }
          helperText={
            formik.touched[field.name] && formik.errors[field.name]
              ? formik.errors[field.name]
              : field.helperText
          }
        />
      ))}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={formik.isSubmitting}
        >
          {submitLabel}
        </Button>
      </Box>
    </StyledForm>
  );
};

AnimatedForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string,
      required: PropTypes.bool,
      helperText: PropTypes.string,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  validationSchema: PropTypes.object.isRequired,
  initialValues: PropTypes.object,
  submitLabel: PropTypes.string,
};

export default AnimatedForm; 