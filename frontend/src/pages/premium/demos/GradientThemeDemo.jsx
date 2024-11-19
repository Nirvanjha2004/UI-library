import { Container, Typography, Grid, Box, IconButton, Avatar, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import GradientIcon from '@mui/icons-material/Gradient';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import AnimatedCard from '../../../../../animated-mui-components/src/components/AnimatedCard/index'
import AnimatedButton from '../../../../../animated-mui-components/src/components/AnimatedButton/index'

const GradientThemeDemo = () => {
  const stats = [
    { label: 'Total Users', value: '2.6M' },
    { label: 'Revenue', value: '$8.2M' },
    { label: 'Growth', value: '+24%' },
    { label: 'Active Now', value: '1.2K' }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
        color: 'white',
        pb: 8
      }}
    >
      {/* Header */}
      <Box
        component={motion.div}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: 'linear-gradient(90deg, rgba(107,115,255,0.8) 0%, rgba(0,13,255,0.8) 100%)'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <GradientIcon sx={{ fontSize: 32 }} />
          <Typography variant="h6">Gradient Pro Theme</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <IconButton sx={{ color: 'white' }}><SearchIcon /></IconButton>
          <IconButton sx={{ color: 'white' }}><NotificationsIcon /></IconButton>
          <IconButton sx={{ color: 'white' }}><SettingsIcon /></IconButton>
          <Avatar src="/path/to/avatar.jpg" />
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* Stats */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <AnimatedCard
                animation="fade"
                delay={index * 0.1}
                hover="glow"
                sx={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <Box sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ mb: 1, background: 'linear-gradient(45deg, #FFF 30%, #E0E0FF 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    {stat.label}
                  </Typography>
                </Box>
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>

        {/* Main Content */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <AnimatedCard
              animation="slideUp"
              hover="lift"
              sx={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                height: '100%'
              }}
            >
              <Box sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ background: 'linear-gradient(45deg, #FFF 30%, #E0E0FF 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Activity Overview
                </Typography>
                <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>Chart Placeholder</Typography>
                </Box>
              </Box>
            </AnimatedCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <AnimatedCard
              animation="slideUp"
              delay={0.2}
              hover="lift"
              sx={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                height: '100%'
              }}
            >
              <Box sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ background: 'linear-gradient(45deg, #FFF 30%, #E0E0FF 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Recent Activity
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {[1, 2, 3].map((item) => (
                    <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ background: 'linear-gradient(45deg, #6B73FF 30%, #000DFF 90%)' }}>U</Avatar>
                      <Box>
                        <Typography variant="body2">User activity {item}</Typography>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>2 hours ago</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </AnimatedCard>
          </Grid>
        </Grid>

        {/* Actions */}
        <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
          <AnimatedButton
            variant="contained"
            animation="bounce"
            sx={{
              background: 'linear-gradient(45deg, #6B73FF 30%, #000DFF 90%)',
              boxShadow: '0 3px 5px 2px rgba(107, 115, 255, .3)'
            }}
          >
            Try Gradient Pro Theme
          </AnimatedButton>
          <AnimatedButton
            variant="outlined"
            animation="pulse"
            sx={{
              borderColor: 'rgba(255,255,255,0.5)',
              color: 'white',
              '&:hover': {
                borderColor: 'white'
              }
            }}
          >
            Learn More
          </AnimatedButton>
        </Box>
      </Container>
    </Box>
  );
};

export default GradientThemeDemo; 