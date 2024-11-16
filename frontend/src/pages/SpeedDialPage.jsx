import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedSpeedDial from '../../../animated-mui-components/src/components/AnimatedSpeedDial';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';

const SpeedDialPage = () => {
  const [dials, setDials] = useState({});

  const handleOpen = (id) => () => {
    setDials(prev => ({
      ...prev,
      [id]: true
    }));
  };

  const handleClose = (id) => () => {
    setDials(prev => ({
      ...prev,
      [id]: false
    }));
  };

  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy', onClick: () => console.log('Copy clicked') },
    { icon: <SaveIcon />, name: 'Save', onClick: () => console.log('Save clicked') },
    { icon: <PrintIcon />, name: 'Print', onClick: () => console.log('Print clicked') },
    { icon: <ShareIcon />, name: 'Share', onClick: () => console.log('Share clicked') }
  ];

  const speedDialExamples = [
    {
      title: 'Basic Speed Dial with Fade Animation',
      component: (
        <Paper elevation={3} sx={{ position: 'relative', height: 320, width: '100%' }}>
          <AnimatedSpeedDial
            open={dials.basic || false}
            onOpen={handleOpen('basic')}
            onClose={handleClose('basic')}
            actions={actions}
            animation="fade"
            icon={<EditIcon />}
          />
        </Paper>
      ),
      code: `
<AnimatedSpeedDial
  open={open}
  onOpen={handleOpen}
  onClose={handleClose}
  actions={[
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' }
  ]}
  animation="fade"
  icon={<EditIcon />}
/>`
    },
    {
      title: 'Scale Animation with Stagger',
      component: (
        <Paper elevation={3} sx={{ position: 'relative', height: 320, width: '100%' }}>
          <AnimatedSpeedDial
            open={dials.scale || false}
            onOpen={handleOpen('scale')}
            onClose={handleClose('scale')}
            actions={actions}
            animation="scale"
            actionAnimation="stagger"
            direction="left"
          />
        </Paper>
      ),
      code: `
<AnimatedSpeedDial
  open={open}
  onOpen={handleOpen}
  onClose={handleClose}
  actions={actions}
  animation="scale"
  actionAnimation="stagger"
  direction="left"
/>`
    },
    {
      title: 'Cascade Animation',
      component: (
        <Paper elevation={3} sx={{ position: 'relative', height: 320, width: '100%' }}>
          <AnimatedSpeedDial
            open={dials.cascade || false}
            onOpen={handleOpen('cascade')}
            onClose={handleClose('cascade')}
            actions={actions}
            animation="slideUp"
            actionAnimation="cascade"
            direction="up"
          />
        </Paper>
      ),
      code: `
<AnimatedSpeedDial
  open={open}
  onOpen={handleOpen}
  onClose={handleClose}
  actions={actions}
  animation="slideUp"
  actionAnimation="cascade"
  direction="up"
/>`
    },
    {
      title: 'Fan Animation',
      component: (
        <Paper elevation={3} sx={{ position: 'relative', height: 320, width: '100%' }}>
          <AnimatedSpeedDial
            open={dials.fan || false}
            onOpen={handleOpen('fan')}
            onClose={handleClose('fan')}
            actions={actions}
            animation="scale"
            actionAnimation="fan"
            direction="right"
          />
        </Paper>
      ),
      code: `
<AnimatedSpeedDial
  open={open}
  onOpen={handleOpen}
  onClose={handleClose}
  actions={actions}
  animation="scale"
  actionAnimation="fan"
  direction="right"
/>`
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
          Animated Speed Dial
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your speed dial with smooth animations and transitions.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {speedDialExamples.map((example, index) => (
            <Grid item xs={12} key={index}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  {example.title}
                </Typography>
                <Box sx={{ mb: 2 }}>
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

export default SpeedDialPage; 