import { Box, CircularProgress, LinearProgress, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';

const ProgressWrapper = styled(motion.div)({
  position: 'relative',
  display: 'inline-flex',
});

const progressVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.3
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    transition: {
      duration: 0.2
    }
  }
};

const CircularProgressWithLabel = ({ value, size = 40, thickness = 4 }) => {
  return (
    <ProgressWrapper>
      <CircularProgress 
        variant="determinate" 
        value={value} 
        size={size}
        thickness={thickness}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </ProgressWrapper>
  );
};

const AnimatedProgress = ({ 
  variant = "linear", // linear, circular, circularWithLabel
  value = 0,
  color = "primary",
  size,
  thickness,
  showLabel = false,
  ...props 
}) => {
  const getProgressComponent = () => {
    switch(variant) {
      case "circular":
        return (
          <CircularProgress 
            value={value} 
            size={size} 
            thickness={thickness}
            color={color}
            {...props}
          />
        );
      case "circularWithLabel":
        return (
          <CircularProgressWithLabel 
            value={value}
            size={size}
            thickness={thickness}
            {...props}
          />
        );
      default:
        return (
          <Box sx={{ width: '100%', position: 'relative' }}>
            <LinearProgress 
              variant="determinate" 
              value={value}
              color={color}
              {...props}
            />
            {showLabel && (
              <Box sx={{ 
                position: 'absolute', 
                right: 0, 
                top: -20 
              }}>
                <Typography variant="body2" color="text.secondary">
                  {`${Math.round(value)}%`}
                </Typography>
              </Box>
            )}
          </Box>
        );
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={progressVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {getProgressComponent()}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedProgress; 