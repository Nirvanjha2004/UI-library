import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: theme.spacing(1, 0),
  },
}));

const AnimatedAccordion = ({ 
  title, 
  children, 
  expanded, 
  onChange,
  icon = <ExpandMoreIcon />,
  ...props 
}) => {
  return (
    <StyledAccordion expanded={expanded} onChange={onChange} {...props}>
      <AccordionSummary
        expandIcon={
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        }
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </AccordionDetails>
    </StyledAccordion>
  );
};

export default AnimatedAccordion; 