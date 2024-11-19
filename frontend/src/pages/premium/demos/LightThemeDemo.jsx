import { Container, Typography, Grid, Box, IconButton, Avatar, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import AnimatedCard from '../../../../../animated-mui-components/src/components/AnimatedCard/index'
import AnimatedButton from '../../../../../animated-mui-components/src/components/AnimatedButton/index'

const LightThemeDemo = () => {
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
        bgcolor: '#f8f9fa',
        color: 'text.primary',
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
          borderBottom: '1px solid',
          borderColor: 'divider',
          backdropFilter: 'blur(10px)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          bgcolor: 'rgba(255,255,255,0.9)'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <LightModeIcon sx={{ fontSize: 32, color: 'primary.main' }} />
          <Typography variant="h6" color="primary.main">Light Pro Theme</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <IconButton><SearchIcon /></IconButton>
          <IconButton><NotificationsIcon /></IconButton>
          <IconButton><SettingsIcon /></IconButton>
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
                hover="lift"
                sx={{
                  bgcolor: 'white',
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}
              >
                <Box sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant="h4" color="primary.main" sx={{ mb: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
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
                bgcolor: 'white',
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                height: '100%'
              }}
            >
              <Box sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom color="primary.main">
                  Activity Overview
                </Typography>
                <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography color="text.secondary">Chart Placeholder</Typography>
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
                bgcolor: 'white',
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                height: '100%'
              }}
            >
              <Box sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom color="primary.main">
                  Recent Activity
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {[1, 2, 3].map((item) => (
                    <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ bgcolor: 'primary.light' }}>U</Avatar>
                      <Box>
                        <Typography variant="body2">User activity {item}</Typography>
                        <Typography variant="caption" color="text.secondary">2 hours ago</Typography>
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
            Try Light Pro Theme
          </AnimatedButton>
          <AnimatedButton
            variant="outlined"
            color="primary"
            animation="pulse"
          >
            Learn More
          </AnimatedButton>
        </Box>
      </Container>
    </Box>
  );
};

export default LightThemeDemo; 