import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedAvatar from '../../../animated-mui-components/src/components/AnimatedAvatar';
import FaceIcon from '@mui/icons-material/Face';

const AvatarsPage = () => {
  const avatarExamples = [
    {
      title: 'Pulse Animation',
      component: (
        <AnimatedAvatar
          animation="pulse"
          src="https://i.pravatar.cc/150?img=1"
          alt="User"
          size={60}
        />
      ),
      code: `
<AnimatedAvatar
  animation="pulse"
  src="https://i.pravatar.cc/150?img=1"
  alt="User"
  size={60}
/>`
    },
    {
      title: 'Rotate Animation',
      component: (
        <AnimatedAvatar
          animation="rotate"
          src="https://i.pravatar.cc/150?img=2"
          alt="User"
          size={60}
        />
      ),
      code: `
<AnimatedAvatar
  animation="rotate"
  src="https://i.pravatar.cc/150?img=2"
  alt="User"
  size={60}
/>`
    },
    {
      title: 'Bounce Animation',
      component: (
        <AnimatedAvatar
          animation="bounce"
          src="https://i.pravatar.cc/150?img=3"
          alt="User"
          size={60}
        />
      ),
      code: `
<AnimatedAvatar
  animation="bounce"
  src="https://i.pravatar.cc/150?img=3"
  alt="User"
  size={60}
/>`
    },
    {
      title: 'Shake Animation',
      component: (
        <AnimatedAvatar
          animation="shake"
          src="https://i.pravatar.cc/150?img=4"
          alt="User"
          size={60}
        />
      ),
      code: `
<AnimatedAvatar
  animation="shake"
  src="https://i.pravatar.cc/150?img=4"
  alt="User"
  size={60}
/>`
    },
    {
      title: 'Border Animation',
      component: (
        <AnimatedAvatar
          animation="border"
          src="https://i.pravatar.cc/150?img=5"
          alt="User"
          size={60}
        />
      ),
      code: `
<AnimatedAvatar
  animation="border"
  src="https://i.pravatar.cc/150?img=5"
  alt="User"
  size={60}
/>`
    },
    {
      title: 'Icon Avatar with Hover',
      component: (
        <AnimatedAvatar
          hover="glow"
          size={60}
        >
          <FaceIcon />
        </AnimatedAvatar>
      ),
      code: `
<AnimatedAvatar
  hover="glow"
  size={60}
>
  <FaceIcon />
</AnimatedAvatar>`
    },
    {
      title: 'Letter Avatar with Bounce',
      component: (
        <AnimatedAvatar
          animation="bounce"
          hover="rotate"
          size={60}
          sx={{ bgcolor: 'primary.main' }}
        >
          A
        </AnimatedAvatar>
      ),
      code: `
<AnimatedAvatar
  animation="bounce"
  hover="rotate"
  size={60}
  sx={{ bgcolor: 'primary.main' }}
>
  A
</AnimatedAvatar>`
    },
    {
      title: 'Square Avatar',
      component: (
        <AnimatedAvatar
          animation="pulse"
          hover="grow"
          variant="square"
          size={60}
          src="https://i.pravatar.cc/150?img=6"
          alt="User"
        />
      ),
      code: `
<AnimatedAvatar
  animation="pulse"
  hover="grow"
  variant="square"
  size={60}
  src="https://i.pravatar.cc/150?img=6"
  alt="User"
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
          Animated Avatars
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your avatars with smooth animations and hover effects.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {avatarExamples.map((example, index) => (
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

export default AvatarsPage; 