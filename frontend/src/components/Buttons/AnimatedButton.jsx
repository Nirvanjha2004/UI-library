import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const StyledButton = styled(motion.div)(({ theme }) => ({
  display: 'inline-block',
  '& .MuiButton-root': {
    borderRadius: theme.shape.borderRadius,
    textTransform: 'none',
  },
}));

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

const AnimatedButton = ({ 
  children, 
  variant = "contained", 
  color = "primary",
  ...props 
}) => {
  return (
    <StyledButton
      whileHover={buttonVariants.hover}
      whileTap={buttonVariants.tap}
    >
      <Button 
        variant={variant} 
        color={color} 
        {...props}
      >
        {children}
      </Button>
    </StyledButton>
  );
};

AnimatedButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'warning', 'info', 'success']),
};

export default AnimatedButton; 