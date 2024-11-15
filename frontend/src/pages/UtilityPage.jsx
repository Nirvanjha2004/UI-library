import { Box, Typography, Container, Grid, IconButton, Stack } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AnimatedTooltip from '../components/Tooltips/AnimatedTooltip';
import AnimatedBadge from '../components/Badges/AnimatedBadge';
import AnimatedAccordion from '../components/Accordion/AnimatedAccordion';
import AnimatedTabs from '../components/Tabs/AnimatedTabs';
import AnimatedChip from '../components/Chips/AnimatedChip';
import AnimatedDropdown from '../components/Dropdown/AnimatedDropdown';
import AnimatedProgress from '../components/Progress/AnimatedProgress';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedButton from '../components/Buttons/AnimatedButton';

const UtilityPage = () => {
  const [expandedAccordion, setExpandedAccordion] = useState(false);
  const containerRef = useRef(null);
  
  const tabsData = [
    {
      label: 'Tab 1',
      content: 'Content for Tab 1',
    },
    {
      label: 'Tab 2',
      content: 'Content for Tab 2',
    },
    {
      label: 'Tab 3',
      content: 'Content for Tab 3',
    },
  ];

  const tooltipExample = `
import { AnimatedTooltip } from 'your-ui-library';

// Basic Tooltip
<AnimatedTooltip title="Basic Tooltip">
  <Button>Hover me</Button>
</AnimatedTooltip>

// Animated Tooltip
<AnimatedTooltip 
  title="Scale Animation" 
  animation="scale"
>
  <Button>Scale Effect</Button>
</AnimatedTooltip>`;

  const badgeExample = `
import { AnimatedBadge } from 'your-ui-library';

// Basic Badge
<AnimatedBadge badgeContent={4}>
  <MailIcon />
</AnimatedBadge>

// Animated Badge
<AnimatedBadge 
  badgeContent={3} 
  animation="pulse"
>
  <NotificationsIcon />
</AnimatedBadge>`;

  const accordionExample = `
import { AnimatedAccordion } from 'your-ui-library';

<AnimatedAccordion
  title="Accordion Title"
  expanded={expanded}
  onChange={() => setExpanded(!expanded)}
>
  Accordion content goes here
</AnimatedAccordion>`;

  const tabsExample = `
import { AnimatedTabs } from 'your-ui-library';

const tabs = [
  { label: 'Tab 1', content: 'Content 1' },
  { label: 'Tab 2', content: 'Content 2' },
];

<AnimatedTabs tabs={tabs} defaultTab={0} />`;

  const chipExample = `
import { AnimatedChip } from 'your-ui-library';

// Basic Chip
<AnimatedChip label="Basic Chip" />

// Animated Chip
<AnimatedChip 
  label="Bounce Effect"
  animation="bounce"
  onDelete={() => {}}
/>`;

  const dropdownExample = `
import { AnimatedDropdown } from 'your-ui-library';

const items = [
  { label: 'Edit', icon: <EditIcon /> },
  { label: 'Delete', icon: <DeleteIcon /> },
];

<AnimatedDropdown 
  items={items}
  onItemClick={(item) => console.log(item)}
/>`;

  const progressExample = `
import { AnimatedProgress } from 'your-ui-library';

// Linear Progress
<AnimatedProgress value={75} showLabel />

// Circular Progress
<AnimatedProgress 
  variant="circularWithLabel" 
  value={75} 
  size={60}
/>`;

  const dropdownItems = [
    { label: 'Edit', icon: <EditIcon /> },
    { label: 'Delete', icon: <DeleteIcon /> },
    { label: 'Share', icon: <MailIcon /> },
  ];

  return (
    <Container maxWidth="lg" ref={containerRef}>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <Typography variant="h1" gutterBottom>
            Utility Components
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Enhanced tooltips and badges with smooth animations.
          </Typography>

          <Box sx={{ mb: 6 }}>
            <Typography variant="h2" gutterBottom>
              Tooltips
            </Typography>
            <Grid container spacing={4} sx={{ mb: 4 }}>
              <Grid item>
                <AnimatedTooltip title="Basic Tooltip">
                  <AnimatedButton>Hover me</AnimatedButton>
                </AnimatedTooltip>
              </Grid>
              <Grid item>
                <AnimatedTooltip 
                  title="Scale Animation" 
                  animation="scale"
                >
                  <AnimatedButton>Scale Effect</AnimatedButton>
                </AnimatedTooltip>
              </Grid>
              <Grid item>
                <AnimatedTooltip 
                  title="Slide Animation" 
                  animation="slide"
                >
                  <AnimatedButton>Slide Effect</AnimatedButton>
                </AnimatedTooltip>
              </Grid>
            </Grid>
            <CodePreview code={tooltipExample} />
          </Box>

          <Box sx={{ mb: 6 }}>
            <Typography variant="h2" gutterBottom>
              Badges
            </Typography>
            <Grid container spacing={4} sx={{ mb: 4 }}>
              <Grid item>
                <AnimatedBadge badgeContent={4}>
                  <IconButton>
                    <MailIcon />
                  </IconButton>
                </AnimatedBadge>
              </Grid>
              <Grid item>
                <AnimatedBadge 
                  badgeContent={3} 
                  animation="pulse"
                  color="secondary"
                >
                  <IconButton>
                    <NotificationsIcon />
                  </IconButton>
                </AnimatedBadge>
              </Grid>
              <Grid item>
                <AnimatedBadge 
                  badgeContent={7} 
                  animation="bounce"
                  color="error"
                >
                  <IconButton>
                    <MailIcon />
                  </IconButton>
                </AnimatedBadge>
              </Grid>
            </Grid>
            <CodePreview code={badgeExample} />
          </Box>

          <Box sx={{ mb: 6 }}>
            <Typography variant="h2" gutterBottom>
              Accordion
            </Typography>
            <AnimatedAccordion
              title="Click to expand"
              expanded={expandedAccordion}
              onChange={() => setExpandedAccordion(!expandedAccordion)}
            >
              <Typography>
                This is the accordion content with a smooth animation.
              </Typography>
            </AnimatedAccordion>
            <CodePreview code={accordionExample} />
          </Box>

          <Box sx={{ mb: 6 }}>
            <Typography variant="h2" gutterBottom>
              Tabs
            </Typography>
            <AnimatedTabs tabs={tabsData} />
            <CodePreview code={tabsExample} />
          </Box>

          <Box sx={{ mb: 6 }}>
            <Typography variant="h2" gutterBottom>
              Chips
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
              <AnimatedChip label="Basic Chip" />
              <AnimatedChip 
                label="With Delete" 
                onDelete={() => {}}
                color="primary"
              />
              <AnimatedChip 
                label="Bounce Effect"
                animation="bounce"
                color="secondary"
                onDelete={() => {}}
              />
              <AnimatedChip 
                label="Shake Effect"
                animation="shake"
                color="error"
              />
            </Stack>
            <CodePreview code={chipExample} />
          </Box>

          <Box sx={{ mb: 6 }}>
            <Typography variant="h2" gutterBottom>
              Dropdown Menu
            </Typography>
            <Box sx={{ mb: 4 }}>
              <AnimatedDropdown 
                items={dropdownItems}
                onItemClick={(item) => console.log(item)}
              />
            </Box>
            <CodePreview code={dropdownExample} />
          </Box>

          <Box sx={{ mb: 6 }}>
            <Typography variant="h2" gutterBottom>
              Progress Indicators
            </Typography>
            <Grid container spacing={4} sx={{ mb: 4 }}>
              <Grid item xs={12} md={6}>
                <AnimatedProgress value={75} showLabel />
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack direction="row" spacing={4}>
                  <AnimatedProgress 
                    variant="circular" 
                    value={75} 
                    size={60}
                  />
                  <AnimatedProgress 
                    variant="circularWithLabel" 
                    value={75} 
                    size={60}
                  />
                </Stack>
              </Grid>
            </Grid>
            <CodePreview code={progressExample} />
          </Box>
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

export default UtilityPage; 