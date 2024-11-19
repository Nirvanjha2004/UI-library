import { Container, Typography, Grid, Box, Paper, IconButton, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import SupportIcon from '@mui/icons-material/Support';
import AnimatedCard from '../../../../../animated-mui-components/src/components/AnimatedCard';
import AnimatedButton from '../../../../../animated-mui-components/src/components/AnimatedButton';

const LandingPageDemo = () => {
  const features = [
    {
      icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
      title: 'Fast Performance',
      description: 'Lightning-fast load times and smooth animations'
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Optimized Code',
      description: 'Clean and optimized code for better performance'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Secure',
      description: 'Built with security best practices in mind'
    },
    {
      icon: <SupportIcon sx={{ fontSize: 40 }} />,
      title: '24/7 Support',
      description: 'Round-the-clock support for your needs'
    }
  ];

  const images = {
    hero: 'https://source.unsplash.com/random/1200x800/?startup',
    features: [
      'https://source.unsplash.com/random/600x400/?performance',
      'https://source.unsplash.com/random/600x400/?code',
      'https://source.unsplash.com/random/600x400/?security',
      'https://source.unsplash.com/random/600x400/?support'
    ]
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h1" gutterBottom>
                  Launch Your Next Big Idea
                </Typography>
                <Typography variant="h5" paragraph>
                  Create stunning landing pages that convert visitors into customers
                </Typography>
                <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                  <AnimatedButton
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    animation="bounce"
                  >
                    Get Started
                  </AnimatedButton>
                  <AnimatedButton
                    variant="outlined"
                    color="inherit"
                    size="large"
                    animation="pulse"
                  >
                    Learn More
                  </AnimatedButton>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.img
                src={images.hero}
                alt="Hero"
                style={{ width: '100%', borderRadius: 16 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Why Choose Us
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Everything you need to succeed
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <AnimatedCard
                animation="fade"
                hover="lift"
                delay={index * 0.1}
              >
                <Box sx={{ p: 3, textAlign: 'center' }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Box>
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 12,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" paragraph>
            Join thousands of satisfied customers who trust our platform
          </Typography>
          <Box sx={{ mt: 4 }}>
            <AnimatedButton
              variant="contained"
              color="secondary"
              size="large"
              animation="bounce"
            >
              Start Free Trial
            </AnimatedButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPageDemo; 