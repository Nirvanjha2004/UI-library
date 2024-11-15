import { Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const StyledChip = styled(motion.div)(({ theme }) => ({
  display: 'inline-flex',
  margin: theme.spacing(0.5),
}));

const chipVariants = {
  initial: { 
    scale: 0,
    opacity: 0 
  },
  animate: { 
    scale: 1,
    opacity: 1 
  },
  exit: { 
    scale: 0,
    opacity: 0 
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.95
  },
  shake: {
    x: [-2, 2, -2, 2, 0],
    transition: {
      duration: 0.5
    }
  },
  bounce: {
    y: [0, -6, 0],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

const AnimatedChip = ({ 
  label, 
  onDelete, 
  color = "default",
  variant = "filled",
  size = "medium",
  animation = "default", // default, shake, bounce
  ...props 
}) => {
  const getAnimationVariant = () => {
    switch(animation) {
      case "shake":
        return chipVariants.shake;
      case "bounce":
        return chipVariants.bounce;
      default:
        return {};
    }
  };

  return (
    <StyledChip
      initial="initial"
      animate={{
        ...chipVariants.animate,
        ...getAnimationVariant()
      }}
      exit="exit"
      whileHover="hover"
      whileTap="tap"
      transition={{ duration: 0.2 }}
    >
      <Chip
        label={label}
        onDelete={onDelete}
        color={color}
        variant={variant}
        size={size}
        {...props}
      />
    </StyledChip>
  );
};

export default AnimatedChip; 