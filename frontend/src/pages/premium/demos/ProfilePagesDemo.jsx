import { Container, Typography, Grid, Box, Paper, IconButton, Avatar, Tab, Tabs, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import AnimatedCard from '../../../../../animated-mui-components/src/components/AnimatedCard';
import AnimatedButton from '../../../../../animated-mui-components/src/components/AnimatedButton';

const ProfilePagesDemo = () => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const activities = [
    { type: 'post', content: 'Published a new article', time: '2 hours ago' },
    { type: 'like', content: 'Liked a photo', time: '4 hours ago' },
    { type: 'comment', content: 'Commented on a post', time: '1 day ago' },
    { type: 'share', content: 'Shared a video', time: '2 days ago' }
  ];

  const stats = [
    { label: 'Posts', value: '248' },
    { label: 'Followers', value: '12.4K' },
    { label: 'Following', value: '536' },
    { label: 'Projects', value: '32' }
  ];

  // Update image URLs
  const coverImage = 'https://source.unsplash.com/random/1600x400/?landscape';
  const profileImage = 'https://i.pravatar.cc/300?img=1';
  const postImages = [
    'https://source.unsplash.com/random/800x600/?technology',
    'https://source.unsplash.com/random/800x600/?design',
    'https://source.unsplash.com/random/800x600/?development'
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', pb: 8 }}>
      {/* Cover Photo */}
      <Box
        sx={{
          height: 300,
          bgcolor: 'primary.main',
          position: 'relative',
          backgroundImage: `url(${coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <IconButton
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            bgcolor: 'white'
          }}
        >
          <PhotoCameraIcon />
        </IconButton>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -8 }}>
        <Grid container spacing={4}>
          {/* Profile Info */}
          <Grid item xs={12} md={4}>
            <AnimatedCard
              animation="slideUp"
              hover="lift"
            >
              <Box sx={{ p: 3, textAlign: 'center' }}>
                <Box sx={{ position: 'relative', display: 'inline-block' }}>
                  <Avatar
                    src={profileImage}
                    sx={{ width: 120, height: 120, mb: 2, mx: 'auto' }}
                  />
                  <IconButton
                    size="small"
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      right: 0,
                      bgcolor: 'primary.main',
                      color: 'white',
                      '&:hover': { bgcolor: 'primary.dark' }
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Typography variant="h5" gutterBottom>John Doe</Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Senior Developer at Tech Corp
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 3 }}>
                  <LocationOnIcon color="action" />
                  <Typography variant="body2" color="text.secondary">
                    New York, USA
                  </Typography>
                </Box>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  {stats.map((stat, index) => (
                    <Grid item xs={6} key={index}>
                      <Box sx={{ p: 1, bgcolor: 'background.default', borderRadius: 1 }}>
                        <Typography variant="h6">{stat.value}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {stat.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <AnimatedButton
                  variant="contained"
                  fullWidth
                  animation="bounce"
                >
                  Edit Profile
                </AnimatedButton>
              </Box>
            </AnimatedCard>

            <AnimatedCard
              animation="slideUp"
              hover="lift"
              delay={0.1}
              sx={{ mt: 3 }}
            >
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Contact Info</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <EmailIcon color="action" />
                  <Typography>john.doe@example.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <WorkIcon color="action" />
                  <Typography>Tech Corp Inc.</Typography>
                </Box>
              </Box>
            </AnimatedCard>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={8}>
            <AnimatedCard
              animation="slideUp"
              hover="lift"
              delay={0.2}
            >
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tab} onChange={handleTabChange}>
                  <Tab label="Timeline" />
                  <Tab label="About" />
                  <Tab label="Projects" />
                  <Tab label="Settings" />
                </Tabs>
              </Box>
              <Box sx={{ p: 3 }}>
                {tab === 0 && (
                  <Box>
                    {activities.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Paper sx={{ p: 2, mb: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar src={profileImage} />
                            <Box>
                              <Typography variant="body1">
                                {activity.content}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                {activity.time}
                              </Typography>
                            </Box>
                          </Box>
                        </Paper>
                      </motion.div>
                    ))}
                  </Box>
                )}
                {/* Add content for other tabs */}
              </Box>
            </AnimatedCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProfilePagesDemo; 