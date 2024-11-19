import { Container, Typography, Grid, Box, Paper, IconButton, Avatar, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AnimatedCard from '../../../../../animated-mui-components/src/components/AnimatedCard';
import AnimatedChart from '../../../../../animated-mui-components/src/components/AnimatedChart';

const DashboardDemo = () => {
  const [notifications] = useState(4);

  const stats = [
    {
      title: 'Total Revenue',
      value: '$24,500',
      change: '+15%',
      icon: <AttachMoneyIcon sx={{ fontSize: 40, color: 'success.main' }} />,
      chartData: [
        { name: 'Jan', value: 4000 },
        { name: 'Feb', value: 3000 },
        { name: 'Mar', value: 5000 },
        { name: 'Apr', value: 4500 },
        { name: 'May', value: 6000 }
      ]
    },
    {
      title: 'New Users',
      value: '1,250',
      change: '+10%',
      icon: <PeopleIcon sx={{ fontSize: 40, color: 'info.main' }} />,
      chartData: [
        { name: 'Jan', value: 200 },
        { name: 'Feb', value: 300 },
        { name: 'Mar', value: 250 },
        { name: 'Apr', value: 400 },
        { name: 'May', value: 350 }
      ]
    },
    {
      title: 'Orders',
      value: '450',
      change: '+20%',
      icon: <ShoppingCartIcon sx={{ fontSize: 40, color: 'warning.main' }} />,
      chartData: [
        { name: 'Jan', value: 80 },
        { name: 'Feb', value: 100 },
        { name: 'Mar', value: 90 },
        { name: 'Apr', value: 120 },
        { name: 'May', value: 110 }
      ]
    },
    {
      title: 'Growth',
      value: '25%',
      change: '+5%',
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      chartData: [
        { name: 'Jan', value: 15 },
        { name: 'Feb', value: 20 },
        { name: 'Mar', value: 18 },
        { name: 'Apr', value: 25 },
        { name: 'May', value: 22 }
      ]
    }
  ];

  const avatarUrl = "https://i.pravatar.cc/300"; // For profile pictures

  const chartImages = {
    revenue: "https://source.unsplash.com/random/800x600/?chart",
    users: "https://source.unsplash.com/random/800x600/?analytics",
    orders: "https://source.unsplash.com/random/800x600/?business",
    growth: "https://source.unsplash.com/random/800x600/?growth"
  };

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <Box
        component={motion.div}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        sx={{
          bgcolor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          py: 2
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Admin Dashboard
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <IconButton>
                <Badge badgeContent={notifications} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <SettingsIcon />
              </IconButton>
              <Avatar src={avatarUrl} />
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* Stats Grid */}
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <AnimatedCard
                animation="fade"
                hover="lift"
                delay={index * 0.1}
              >
                <Box sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    {stat.icon}
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="h4">{stat.value}</Typography>
                      <Typography variant="body2" color="success.main">
                        {stat.change}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    {stat.title}
                  </Typography>
                  <Box sx={{ height: 60, mt: 2 }}>
                    <AnimatedChart
                      type="area"
                      data={stat.chartData}
                      dataKey="value"
                      animation="slideUp"
                      hideAxis
                      gradient
                    />
                  </Box>
                </Box>
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>

        {/* Main Content */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={8}>
            <AnimatedCard
              animation="slideUp"
              hover="lift"
              delay={0.4}
            >
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Revenue Overview
                </Typography>
                <Box sx={{ height: 400 }}>
                  <AnimatedChart
                    type="bar"
                    data={stats[0].chartData}
                    dataKey="value"
                    animation="slideUp"
                  />
                </Box>
              </Box>
            </AnimatedCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <AnimatedCard
              animation="slideUp"
              hover="lift"
              delay={0.5}
            >
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Recent Activity
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {[1, 2, 3, 4].map((item) => (
                    <Box
                      key={item}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 2,
                        p: 2,
                        borderRadius: 1,
                        bgcolor: 'background.default'
                      }}
                    >
                      <Avatar>U</Avatar>
                      <Box>
                        <Typography variant="body2">
                          User activity {item}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          2 hours ago
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </AnimatedCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DashboardDemo; 