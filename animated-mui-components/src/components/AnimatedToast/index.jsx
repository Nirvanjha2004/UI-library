import React, { useEffect } from 'react';
import { Alert, Box, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';

const animations = {
  slideRight: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 }
  },
  slideLeft: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 }
  },
  slideUp: {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 }
  },
  slideDown: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 }
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  }
};

const severityIcons = {
  success: <CheckCircleIcon />,
  error: <ReportProblemIcon />,
  warning: <WarningIcon />,
  info: <InfoIcon />
};

const getPositionStyles = (anchorOrigin) => {
  const { vertical, horizontal } = anchorOrigin;
  const positions = {
    top: 16,
    bottom: 16,
    left: 16,
    right: 16,
    center: '50%'
  };

  const transform = horizontal === 'center' ? 'translateX(-50%)' : 'none';

  return {
    position: 'fixed',
    [vertical]: positions[vertical],
    [horizontal]: positions[horizontal],
    transform,
    zIndex: 1400
  };
};

const getVariant = (severity) => {
  switch (severity) {
    case 'success':
      return {
        background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
        color: 'white'
      };
    case 'error':
      return {
        background: 'linear-gradient(135deg, #dc3545 0%, #f86384 100%)',
        color: 'white'
      };
    case 'warning':
      return {
        background: 'linear-gradient(135deg, #ffc107 0%, #ffb822 100%)',
        color: 'rgba(0,0,0,0.87)'
      };
    case 'info':
      return {
        background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)',
        color: 'white'
      };
    default:
      return {};
  }
};

const AnimatedToast = ({
  open,
  onClose,
  message,
  severity = 'success',
  animation = 'slideRight',
  duration = 3000,
  anchorOrigin = { vertical: 'bottom', horizontal: 'right' },
  variant = 'filled',
  showIcon = true,
  ...props
}) => {
  const MotionAlert = motion(Alert);
  const animationConfig = animations[animation];
  const positionStyles = getPositionStyles(anchorOrigin);
  const variantStyles = getVariant(severity);

  useEffect(() => {
    if (open && duration !== null) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [open, duration, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <Box sx={positionStyles}>
          <MotionAlert
            severity={severity}
            variant={variant}
            icon={showIcon ? severityIcons[severity] : null}
            initial={animationConfig.initial}
            animate={animationConfig.animate}
            exit={animationConfig.exit}
            transition={{ duration: 0.3 }}
            onClose={onClose}
            action={
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={onClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            }
            sx={{
              minWidth: '300px',
              maxWidth: '600px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              ...variantStyles,
              '& .MuiAlert-icon': {
                fontSize: '24px'
              }
            }}
            {...props}
          >
            {message}
          </MotionAlert>
        </Box>
      )}
    </AnimatePresence>
  );
};

AnimatedToast.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  severity: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  animation: PropTypes.oneOf(['slideRight', 'slideLeft', 'slideUp', 'slideDown', 'fade', 'scale']),
  duration: PropTypes.number,
  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(['top', 'bottom']),
    horizontal: PropTypes.oneOf(['left', 'center', 'right'])
  }),
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
  showIcon: PropTypes.bool
};

export default AnimatedToast; 