import { Tabs, Tab, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  '& .MuiTabs-indicator': {
    height: 3,
    borderRadius: theme.shape.borderRadius,
  },
}));

const TabPanel = ({ children, value, index }) => {
  return (
    <AnimatePresence mode="wait">
      {value === index && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Box sx={{ p: 3 }}>{children}</Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const AnimatedTabs = ({ tabs = [], defaultTab = 0 }) => {
  const [value, setValue] = useState(defaultTab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.label}
                </motion.div>
              }
            />
          ))}
        </StyledTabs>
      </Box>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
};

export default AnimatedTabs; 