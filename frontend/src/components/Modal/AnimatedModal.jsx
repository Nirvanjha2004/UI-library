import { Modal, Paper } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ModalContent = styled(motion(Paper))(({ theme }) => ({
  padding: theme.spacing(3),
  outline: 'none',
  maxWidth: '90%',
  maxHeight: '90vh',
  overflow: 'auto',
}));

const modalVariants = {
  initial: { 
    opacity: 0,
    scale: 0.9,
  },
  animate: { 
    opacity: 1,
    scale: 1,
  },
  exit: { 
    opacity: 0,
    scale: 0.9,
  }
};

const AnimatedModal = ({ 
  open, 
  onClose, 
  children,
  ...props 
}) => {
  return (
    <StyledModal
      open={open}
      onClose={onClose}
      closeAfterTransition
    >
      <AnimatePresence mode="wait">
        {open && (
          <ModalContent
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            {...props}
          >
            {children}
          </ModalContent>
        )}
      </AnimatePresence>
    </StyledModal>
  );
};

AnimatedModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default AnimatedModal; 