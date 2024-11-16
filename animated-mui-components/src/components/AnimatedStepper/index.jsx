import { Stepper, Step, StepLabel, StepContent, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slide: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 }
  },
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  },
  stagger: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 }
  }
};

const contentAnimations = {
  expand: {
    initial: { height: 0, opacity: 0 },
    animate: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 }
  },
  slideDown: {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 }
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }
};

const connectorAnimations = {
  grow: {
    initial: { scaleY: 0 },
    animate: { scaleY: 1 },
    transition: { duration: 0.3 }
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 }
  },
  none: {}
};

const AnimatedStepper = ({
  activeStep,
  steps,
  orientation = 'vertical',
  animation = 'fade',
  contentAnimation = 'expand',
  connectorAnimation = 'grow',
  duration = 0.3,
  staggerDelay = 0.1,
  ...props
}) => {
  const MotionStep = motion(Step);
  const MotionStepContent = motion(StepContent);
  const animationConfig = animations[animation];
  const contentConfig = contentAnimations[contentAnimation];
  const connectorConfig = connectorAnimations[connectorAnimation];

  return (
    <Stepper
      activeStep={activeStep}
      orientation={orientation}
      {...props}
    >
      <AnimatePresence mode="wait">
        {steps.map((step, index) => (
          <MotionStep
            key={step.label}
            initial={animationConfig.initial}
            animate={animationConfig.animate}
            exit={animationConfig.exit}
            transition={{
              duration,
              delay: animation === 'stagger' ? index * staggerDelay : 0
            }}
          >
            <StepLabel>{step.label}</StepLabel>
            {orientation === 'vertical' && (
              <MotionStepContent
                TransitionProps={{
                  unmountOnExit: true
                }}
                initial={contentConfig.initial}
                animate={activeStep === index ? contentConfig.animate : contentConfig.initial}
                exit={contentConfig.exit}
                transition={{ duration }}
              >
                <Box sx={{ mb: 2 }}>
                  {step.content}
                </Box>
              </MotionStepContent>
            )}
          </MotionStep>
        ))}
      </AnimatePresence>
    </Stepper>
  );
};

AnimatedStepper.propTypes = {
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      content: PropTypes.node,
      optional: PropTypes.node
    })
  ).isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  animation: PropTypes.oneOf(['fade', 'slide', 'scale', 'stagger']),
  contentAnimation: PropTypes.oneOf(['expand', 'slideDown', 'fade']),
  connectorAnimation: PropTypes.oneOf(['grow', 'fade', 'none']),
  duration: PropTypes.number,
  staggerDelay: PropTypes.number
};

export default AnimatedStepper; 