import { Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slide: {
    initial: { height: 0, opacity: 0 },
    animate: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 }
  },
  collapse: {
    initial: { scaleY: 0, originY: 0 },
    animate: { scaleY: 1 },
    exit: { scaleY: 0 }
  },
  rotate: {
    initial: { rotateX: -90 },
    animate: { rotateX: 0 },
    exit: { rotateX: -90 }
  }
};

const iconAnimations = {
  rotate: {
    initial: { rotate: 0 },
    animate: { rotate: 180 },
    exit: { rotate: 0 }
  },
  flip: {
    initial: { rotateX: 0 },
    animate: { rotateX: 180 },
    exit: { rotateX: 0 }
  },
  bounce: {
    animate: { 
      rotate: [0, 180],
      y: [0, -2, 2, -2, 0]
    }
  }
};

const AnimatedAccordion = ({
  expanded,
  onChange,
  summary,
  children,
  animation = 'slide',
  iconAnimation = 'rotate',
  duration = 0.3,
  elevation = 1,
  square = false,
  disabled = false,
  ...props
}) => {
  const MotionAccordionDetails = motion(AccordionDetails);
  const MotionIcon = motion(Box);
  const animationConfig = animations[animation];
  const iconConfig = iconAnimations[iconAnimation];

  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      elevation={elevation}
      square={square}
      disabled={disabled}
      sx={{
        '&.MuiAccordion-root': {
          overflow: 'hidden'
        }
      }}
      {...props}
    >
      <AccordionSummary
        expandIcon={
          <MotionIcon
            initial={iconConfig.initial}
            animate={expanded ? iconConfig.animate : iconConfig.initial}
            exit={iconConfig.exit}
            transition={{ duration }}
          >
            <ExpandMoreIcon />
          </MotionIcon>
        }
      >
        {summary}
      </AccordionSummary>
      <AnimatePresence initial={false}>
        {expanded && (
          <MotionAccordionDetails
            initial={animationConfig.initial}
            animate={animationConfig.animate}
            exit={animationConfig.exit}
            transition={{ duration }}
          >
            {children}
          </MotionAccordionDetails>
        )}
      </AnimatePresence>
    </Accordion>
  );
};

AnimatedAccordion.propTypes = {
  expanded: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  summary: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  animation: PropTypes.oneOf(['fade', 'slide', 'collapse', 'rotate']),
  iconAnimation: PropTypes.oneOf(['rotate', 'flip', 'bounce']),
  duration: PropTypes.number,
  elevation: PropTypes.number,
  square: PropTypes.bool,
  disabled: PropTypes.bool
};

export default AnimatedAccordion; 