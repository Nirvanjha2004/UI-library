import { Alert } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const StyledAlert = styled(motion.div)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const alertVariants = {
  initial: { 
    opacity: 0, 
    x: -20 
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.3
    }
  },
  exit: { 
    opacity: 0, 
    x: 20,
    transition: {
      duration: 0.2
    }
  }
};

const AnimatedAlert = ({ 
  show = true,
  severity = "info",
  children,
  onClose,
  ...props 
}) => {
  return (
    <AnimatePresence>
      {show && (
        <StyledAlert
          variants={alertVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Alert 
            severity={severity}
            onClose={onClose}
            {...props}
          >
            {children}
          </Alert>
        </StyledAlert>
      )}
    </AnimatePresence>
  );
};

AnimatedAlert.propTypes = {
  show: PropTypes.bool,
  severity: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
};

export default AnimatedAlert; 