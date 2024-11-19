import { Container, Typography, Grid, Box, Card, Button, IconButton, Avatar, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import AnimatedCard from '../../../../../animated-mui-components/src/components/AnimatedCard/index'
import AnimatedButton from '../../../../../animated-mui-components/src/components/AnimatedButton/index'

const DarkThemeDemo = () => {
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
        bgcolor: '#121212',
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
          bgcolor: 'rgba(18,18,18,0.8)'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <DarkModeIcon sx={{ fontSize: 32 }} />
          <Typography variant="h6">Dark Pro Theme</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <IconButton color="inherit"><SearchIcon /></IconButton>
          <IconButton color="inherit"><NotificationsIcon /></IconButton>
          <IconButton color="inherit"><SettingsIcon /></IconButton>
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
                  bgcolor: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <Box sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ mb: 1 }}>{stat.value}</Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.7)">{stat.label}</Typography>
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
                bgcolor: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                height: '100%'
              }}
            >
              <Box sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>Activity Overview</Typography>
                <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography color="rgba(255,255,255,0.5)">Chart Placeholder</Typography>
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
                bgcolor: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                height: '100%'
              }}
            >
              <Box sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>Recent Activity</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {[1, 2, 3].map((item) => (
                    <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ bgcolor: 'primary.main' }}>U</Avatar>
                      <Box>
                        <Typography variant="body2">User activity {item}</Typography>
                        <Typography variant="caption" color="rgba(255,255,255,0.5)">2 hours ago</Typography>
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
            color="primary"
            animation="bounce"
            sx={{
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)'
            }}
          >
            Try Dark Pro Theme
          </AnimatedButton>
          <AnimatedButton
            variant="outlined"
            color="inherit"
            animation="pulse"
            sx={{ borderColor: 'rgba(255,255,255,0.3)' }}
          >
            Learn More
          </AnimatedButton>
        </Box>
      </Container>
    </Box>
  );
};

export default DarkThemeDemo; 