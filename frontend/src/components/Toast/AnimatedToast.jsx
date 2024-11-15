import { Alert, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const ToastContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  zIndex: theme.zIndex.snackbar,
  right: theme.spacing(2),
  bottom: theme.spacing(2),
  left: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column-reverse',
  alignItems: 'center',
  gap: theme.spacing(1),
  pointerEvents: 'none',
}));

const toastVariants = {
  initial: { 
    opacity: 0,
    y: 50,
    scale: 0.3,
  },
  animate: { 
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: { 
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.2 }
  }
};

const AnimatedToast = ({ 
  open, 
  message, 
  severity = "success",
  onClose,
  animation = "slide", // slide, fade, scale
  ...props 
}) => {
  const getAnimationVariant = () => {
    switch(animation) {
      case "fade":
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 }
        };
      case "scale":
        return {
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0 }
        };
      default:
        return toastVariants;
    }
  };

  return (
    <ToastContainer>
      <AnimatePresence>
        {open && (
          <motion.div
            {...getAnimationVariant()}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: 'auto', width: '100%', maxWidth: 500 }}
          >
            <Alert
              severity={severity}
              onClose={onClose}
              sx={{ width: '100%' }}
              {...props}
            >
              {message}
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
    </ToastContainer>
  );
};

AnimatedToast.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  severity: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  onClose: PropTypes.func.isRequired,
  animation: PropTypes.oneOf(['slide', 'fade', 'scale']),
};

export default AnimatedToast; 