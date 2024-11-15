import { TextField } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const StyledInput = styled(motion.div)(({ theme }) => ({
  width: '100%',
  '& .MuiTextField-root': {
    width: '100%',
  },
  '& .MuiOutlinedInput-root': {
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
    },
  },
}));

const AnimatedInput = ({ label, variant = "outlined", ...props }) => {
  return (
    <StyledInput
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <TextField
        label={label}
        variant={variant}
        {...props}
      />
    </StyledInput>
  );
};

export default AnimatedInput; 