import { TextField, FormHelperText, FormControl } from '@mui/material';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(2),
}));

const fieldVariants = {
  initial: { 
    y: 20,
    opacity: 0 
  },
  animate: { 
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  error: {
    x: [-2, 2, -2, 2, 0],
    transition: { duration: 0.4 }
  }
};

const AnimatedFormField = ({ 
  label,
  error,
  helperText,
  type = 'text',
  required = false,
  value = '',
  onChange,
  onBlur,
  name,
  autoComplete,
  ...props 
}) => {
  const fieldValue = value ?? '';

  return (
    <motion.div
      variants={fieldVariants}
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.01 }}
    >
      <StyledFormControl error={Boolean(error)}>
        <TextField
          label={label}
          type={type}
          required={required}
          error={Boolean(error)}
          value={fieldValue}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          autoComplete={autoComplete}
          variant="outlined"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          {...props}
        />
        {helperText && (
          <FormHelperText error={Boolean(error)}>
            {helperText}
          </FormHelperText>
        )}
      </StyledFormControl>
    </motion.div>
  );
};

AnimatedFormField.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  helperText: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  name: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
};

export default AnimatedFormField; 