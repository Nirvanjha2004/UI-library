import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedDrawer from '../../../animated-mui-components/src/components/AnimatedDrawer';

const DrawerPage = () => {
  const [drawers, setDrawers] = useState({});

  const toggleDrawer = (id) => () => {
    setDrawers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const drawerExamples = [
    {
      title: 'Left Drawer with Auto Animation',
      component: (
        <>
          <Button 
            variant="contained" 
            onClick={toggleDrawer('left')}
          >
            Open Left Drawer
          </Button>
          <AnimatedDrawer
            open={drawers['left'] || false}
            onClose={toggleDrawer('left')}
            anchor="left"
            animation="auto"
          >
            <Box sx={{ width: 250, p: 2 }}>
              <Typography variant="h6">Left Drawer</Typography>
              <Typography>This drawer slides from the left</Typography>
            </Box>
          </AnimatedDrawer>
        </>
      ),
      code: `
<AnimatedDrawer
  open={open}
  onClose={handleClose}
  anchor="left"
  animation="auto"
>
  <Box sx={{ width: 250, p: 2 }}>
    <Typography variant="h6">Left Drawer</Typography>
    <Typography>This drawer slides from the left</Typography>
  </Box>
</AnimatedDrawer>`
    },
    {
      title: 'Right Drawer with Scale Animation',
      component: (
        <>
          <Button 
            variant="contained" 
            onClick={toggleDrawer('right')}
          >
            Open Right Drawer
          </Button>
          <AnimatedDrawer
            open={drawers['right'] || false}
            onClose={toggleDrawer('right')}
            anchor="right"
            animation="scale"
          >
            <Box sx={{ width: 250, p: 2 }}>
              <Typography variant="h6">Right Drawer</Typography>
              <Typography>This drawer scales in from the right</Typography>
            </Box>
          </AnimatedDrawer>
        </>
      ),
      code: `
<AnimatedDrawer
  open={open}
  onClose={handleClose}
  anchor="right"
  animation="scale"
>
  <Box sx={{ width: 250, p: 2 }}>
    <Typography variant="h6">Right Drawer</Typography>
    <Typography>This drawer scales in from the right</Typography>
  </Box>
</AnimatedDrawer>`
    },
    {
      title: 'Top Drawer with Fade Animation',
      component: (
        <>
          <Button 
            variant="contained" 
            onClick={toggleDrawer('top')}
          >
            Open Top Drawer
          </Button>
          <AnimatedDrawer
            open={drawers['top'] || false}
            onClose={toggleDrawer('top')}
            anchor="top"
            animation="fade"
          >
            <Box sx={{ p: 2 }}>
              <Typography variant="h6">Top Drawer</Typography>
              <Typography>This drawer fades in from the top</Typography>
            </Box>
          </AnimatedDrawer>
        </>
      ),
      code: `
<AnimatedDrawer
  open={open}
  onClose={handleClose}
  anchor="top"
  animation="fade"
>
  <Box sx={{ p: 2 }}>
    <Typography variant="h6">Top Drawer</Typography>
    <Typography>This drawer fades in from the top</Typography>
  </Box>
</AnimatedDrawer>`
    },
    {
      title: 'Bottom Drawer with Custom Animation',
      component: (
        <>
          <Button 
            variant="contained" 
            onClick={toggleDrawer('bottom')}
          >
            Open Bottom Drawer
          </Button>
          <AnimatedDrawer
            open={drawers['bottom'] || false}
            onClose={toggleDrawer('bottom')}
            anchor="bottom"
            animation="slideUp"
            duration={0.5}
            backdrop={true}
            elevation={8}
          >
            <Box sx={{ p: 2 }}>
              <Typography variant="h6">Bottom Drawer</Typography>
              <Typography>This drawer slides up with custom animation</Typography>
            </Box>
          </AnimatedDrawer>
        </>
      ),
      code: `
<AnimatedDrawer
  open={open}
  onClose={handleClose}
  anchor="bottom"
  animation="slideUp"
  duration={0.5}
  backdrop={true}
  elevation={8}
>
  <Box sx={{ p: 2 }}>
    <Typography variant="h6">Bottom Drawer</Typography>
    <Typography>This drawer slides up with custom animation</Typography>
  </Box>
</AnimatedDrawer>`
    }
  ];

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1" gutterBottom>
          Animated Drawers
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your drawers with smooth animations and transitions.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {drawerExamples.map((example, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  {example.title}
                </Typography>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}>
                  {example.component}
                </Box>
                <CodePreview code={example.code} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default DrawerPage; 