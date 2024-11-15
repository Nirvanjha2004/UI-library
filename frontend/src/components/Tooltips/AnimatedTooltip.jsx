import { Tooltip, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';

const TooltipContent = styled(motion.div)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  fontSize: '0.875rem',
  maxWidth: 220,
  textAlign: 'center',
}));

const AnimatedTooltip = ({ 
  children, 
  title, 
  placement = "top",
  animation = "fade", // fade, scale, slide
  ...props 
}) => {
  const getAnimationVariants = () => {
    switch (animation) {
      case "scale":
        return {
          initial: { opacity: 0, scale: 0.6 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.6 }
        };
      case "slide":
        return {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 10 }
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 }
        };
    }
  };

  return (
    <Tooltip
      {...props}
      placement={placement}
      components={{
        Tooltip: ({ children }) => (
          <AnimatePresence>
            <TooltipContent
              {...getAnimationVariants()}
              transition={{ duration: 0.2 }}
            >
              {children}
            </TooltipContent>
          </AnimatePresence>
        ),
      }}
      title={title}
    >
      {children}
    </Tooltip>
  );
};

export default AnimatedTooltip; 