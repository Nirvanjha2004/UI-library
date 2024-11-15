import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';
import AnimatedDrawer from '../components/Navigation/AnimatedDrawer';
import CodePreview from '../components/CodePreview/CodePreview';

const NavigationPage = () => {
  const [openTemp, setOpenTemp] = useState(false);
  const [openMini, setOpenMini] = useState(false);

  const navigationItems = [
    {
      id: 'home',
      label: 'Home',
      icon: <HomeIcon />,
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: <EmailIcon />,
      items: [
        { id: 'inbox', label: 'Inbox' },
        { id: 'sent', label: 'Sent' },
      ],
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: <PersonIcon />,
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />,
      items: [
        { id: 'account', label: 'Account' },
        { id: 'security', label: 'Security' },
      ],
    },
  ];

  const drawerExample = `
import { AnimatedDrawer } from 'your-ui-library';

const navigationItems = [
  {
    id: 'home',
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: <EmailIcon />,
    items: [
      { id: 'inbox', label: 'Inbox' },
      { id: 'sent', label: 'Sent' },
    ],
  },
];

// Permanent Drawer
<AnimatedDrawer
  variant="permanent"
  items={navigationItems}
  onItemClick={(item) => console.log(item)}
/>

// Mini Drawer
<AnimatedDrawer
  variant="mini"
  open={open}
  items={navigationItems}
  onClose={() => setOpen(false)}
/>`;

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1" gutterBottom>
          Navigation
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Enhanced navigation drawer components with animations and nested items.
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" gutterBottom>
            Drawer Variations
          </Typography>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item>
              <Button
                variant="contained"
                onClick={() => setOpenTemp(true)}
              >
                Open Temporary Drawer
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setOpenMini(!openMini)}
              >
                Toggle Mini Drawer
              </Button>
            </Grid>
          </Grid>

          {/* Temporary Drawer */}
          <AnimatedDrawer
            variant="temporary"
            open={openTemp}
            onClose={() => setOpenTemp(false)}
            items={navigationItems}
            onItemClick={(item) => console.log('Selected:', item)}
            header={
              <Typography variant="h6" sx={{ p: 2 }}>
                Menu
              </Typography>
            }
          />

          {/* Mini Drawer */}
          <AnimatedDrawer
            variant="mini"
            open={openMini}
            items={navigationItems}
            onItemClick={(item) => console.log('Selected:', item)}
            sx={{ position: 'relative' }}
          />

          <Box sx={{ mt: 4 }}>
            <CodePreview code={drawerExample} />
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default NavigationPage; 