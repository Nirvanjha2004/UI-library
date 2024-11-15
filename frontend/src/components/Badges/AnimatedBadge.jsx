import { Badge } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(motion(Badge))(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 3,
    padding: '0 4px',
  },
}));

const badgeVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  pulse: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
    }
  },
  bounce: {
    y: [0, -3, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
    }
  }
};

const AnimatedBadge = ({ 
  children, 
  badgeContent, 
  color = "primary",
  animation = "default", // default, pulse, bounce
  ...props 
}) => {
  const getAnimationVariant = () => {
    switch(animation) {
      case "pulse":
        return badgeVariants.pulse;
      case "bounce":
        return badgeVariants.bounce;
      default:
        return {};
    }
  };

  return (
    <StyledBadge
      badgeContent={
        <motion.div
          initial={badgeVariants.initial}
          animate={{
            ...badgeVariants.animate,
            ...getAnimationVariant()
          }}
          transition={{ duration: 0.2 }}
        >
          {badgeContent}
        </motion.div>
      }
      color={color}
      {...props}
    >
      {children}
    </StyledBadge>
  );
};

export default AnimatedBadge; 