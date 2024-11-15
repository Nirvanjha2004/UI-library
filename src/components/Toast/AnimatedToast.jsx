import { Alert, Snackbar, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';

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
  duration = 3000,
  onClose,
  animation = "slide", // slide, fade, scale
  position = "bottom",
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

export default AnimatedToast; 