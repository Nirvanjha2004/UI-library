import React from 'react';
import { Modal, Box, Paper, IconButton, Backdrop } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';

const animations = {
  scale: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 }
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
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
  flip: {
    initial: { rotateX: 90, opacity: 0 },
    animate: { rotateX: 0, opacity: 1 },
    exit: { rotateX: 90, opacity: 0 }
  },
  rotate: {
    initial: { rotate: -180, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 180, opacity: 0 }
  }
};

const backdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const AnimatedModal = ({
  open,
  onClose,
  children,
  animation = 'scale',
  width = 400,
  maxWidth = '90vw',
  maxHeight = '90vh',
  showCloseButton = true,
  closeOnBackdropClick = true,
  backdropColor = 'rgba(0, 0, 0, 0.5)',
  ...props
}) => {
  const MotionPaper = motion(Paper);
  const animationConfig = animations[animation];

  const handleBackdropClick = (event) => {
    if (closeOnBackdropClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: { backgroundColor: backdropColor }
        }
      }}
      {...props}
    >
      <Box
        onClick={handleBackdropClick}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          outline: 'none'
        }}
      >
        <AnimatePresence mode="wait">
          {open && (
            <MotionPaper
              initial={animationConfig.initial}
              animate={animationConfig.animate}
              exit={animationConfig.exit}
              transition={{ duration: 0.3 }}
              sx={{
                position: 'relative',
                width,
                maxWidth,
                maxHeight,
                overflow: 'auto',
                p: 3,
                '&::-webkit-scrollbar': {
                  width: '8px'
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  borderRadius: '4px'
                }
              }}
            >
              {showCloseButton && (
                <IconButton
                  onClick={onClose}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    zIndex: 1
                  }}
                >
                  <CloseIcon />
                </IconButton>
              )}
              <Box sx={{ mt: showCloseButton ? 3 : 0 }}>
                {children}
              </Box>
            </MotionPaper>
          )}
        </AnimatePresence>
      </Box>
    </Modal>
  );
};

AnimatedModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  animation: PropTypes.oneOf(['scale', 'fade', 'slideUp', 'slideDown', 'flip', 'rotate']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.string,
  maxHeight: PropTypes.string,
  showCloseButton: PropTypes.bool,
  closeOnBackdropClick: PropTypes.bool,
  backdropColor: PropTypes.string
};

export default AnimatedModal; 