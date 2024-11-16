import { Container, Typography, Grid, Box, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedBadge from '../../../animated-mui-components/src/components/AnimatedBadge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const BadgesPage = () => {
  const badgeExamples = [
    {
      title: 'Pulse Animation',
      component: (
        <AnimatedBadge
          badgeContent={4}
          animation="pulse"
          color="primary"
        >
          <MailIcon sx={{ fontSize: 30 }} />
        </AnimatedBadge>
      ),
      code: `
<AnimatedBadge
  badgeContent={4}
  animation="pulse"
  color="primary"
>
  <MailIcon />
</AnimatedBadge>`
    },
    {
      title: 'Shake Animation',
      component: (
        <AnimatedBadge
          badgeContent="New"
          animation="shake"
          color="secondary"
        >
          <NotificationsIcon sx={{ fontSize: 30 }} />
        </AnimatedBadge>
      ),
      code: `
<AnimatedBadge
  badgeContent="New"
  animation="shake"
  color="secondary"
>
  <NotificationsIcon />
</AnimatedBadge>`
    },
    {
      title: 'Bounce Animation',
      component: (
        <AnimatedBadge
          badgeContent={2}
          animation="bounce"
          color="error"
        >
          <ShoppingCartIcon sx={{ fontSize: 30 }} />
        </AnimatedBadge>
      ),
      code: `
<AnimatedBadge
  badgeContent={2}
  animation="bounce"
  color="error"
>
  <ShoppingCartIcon />
</AnimatedBadge>`
    },
    {
      title: 'Blink Animation',
      component: (
        <AnimatedBadge
          badgeContent="!"
          animation="blink"
          color="warning"
        >
          <AccountCircleIcon sx={{ fontSize: 30 }} />
        </AnimatedBadge>
      ),
      code: `
<AnimatedBadge
  badgeContent="!"
  animation="blink"
  color="warning"
>
  <AccountCircleIcon />
</AnimatedBadge>`
    },
    {
      title: 'Ripple Animation',
      component: (
        <AnimatedBadge
          badgeContent={3}
          animation="ripple"
          color="info"
        >
          <IconButton>
            <MailIcon />
          </IconButton>
        </AnimatedBadge>
      ),
      code: `
<AnimatedBadge
  badgeContent={3}
  animation="ripple"
  color="info"
>
  <IconButton>
    <MailIcon />
  </IconButton>
</AnimatedBadge>`
    },
    {
      title: 'Custom Badge',
      component: (
        <AnimatedBadge
          badgeContent={99}
          animation="pulse"
          color="success"
          max={99}
          overlap="circular"
        >
          <IconButton>
            <NotificationsIcon />
          </IconButton>
        </AnimatedBadge>
      ),
      code: `
<AnimatedBadge
  badgeContent={99}
  animation="pulse"
  color="success"
  max={99}
  overlap="circular"
>
  <IconButton>
    <NotificationsIcon />
  </IconButton>
</AnimatedBadge>`
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
          Animated Badges
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your badges with smooth animations and transitions.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {badgeExamples.map((example, index) => (
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

export default BadgesPage; 