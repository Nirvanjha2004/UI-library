import { Container, Typography, Grid, Box, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LandingPageIcon from '@mui/icons-material/Web';
import PricingIcon from '@mui/icons-material/LocalOffer';
import AuthIcon from '@mui/icons-material/Security';
import ProfileIcon from '@mui/icons-material/Person';
import ContactIcon from '@mui/icons-material/ContactMail';
import BlogIcon from '@mui/icons-material/Article';

const PagesPage = () => {
  const pages = [
    {
      title: 'Authentication Pages',
      description: 'Modern auth pages with smooth transitions and validations',
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80',
      price: '$59',
      features: [
        'Login Forms',
        'Registration',
        'Password Reset',
        'Social Auth',
        'Email Verification',
        'Two-Factor Auth'
      ],
      icon: <AuthIcon sx={{ fontSize: 40 }} />,
      demoUrl: '/premium/pages/auth-demo',
      category: 'Authentication'
    },
    {
      title: 'Profile Pages',
      description: 'User profile pages with advanced features and animations',
      image: 'https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?auto=format&fit=crop&w=800&q=80',
      price: '$45',
      features: [
        'Profile Overview',
        'Edit Profile',
        'Activity Feed',
        'Settings Panel',
        'Stats Dashboard',
        'Notifications'
      ],
      icon: <ProfileIcon sx={{ fontSize: 40 }} />,
      demoUrl: '/premium/pages/profile-demo',
      category: 'User Management'
    },
    {
      title: 'Contact Pages',
      description: 'Interactive contact pages with form validation and maps',
      image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=800&q=80',
      price: '$39',
      features: [
        'Contact Forms',
        'Google Maps',
        'Form Validation',
        'Email Integration',
        'FAQ Section',
        'Office Locations'
      ],
      icon: <ContactIcon sx={{ fontSize: 40 }} />,
      demoUrl: '/premium/pages/contact-demo',
      category: 'Contact'
    },
    {
      title: 'Pricing Pages',
      description: 'Beautiful pricing page templates with interactive elements',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
      price: '$39',
      features: [
        'Price Cards',
        'Feature Comparison',
        'Custom Toggle',
        'Animated Icons',
        'FAQ Section',
        'CTA Buttons'
      ],
      icon: <PricingIcon sx={{ fontSize: 40 }} />,
      demoUrl: '/premium/pages/pricing-demo',
      category: 'Sales'
    },
    {
      title: 'Blog Pages',
      description: 'Modern blog pages with advanced features',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
      price: '$49',
      features: [
        'Article Layout',
        'Category Pages',
        'Author Profiles',
        'Comments System',
        'Search Function',
        'Related Posts'
      ],
      icon: <BlogIcon sx={{ fontSize: 40 }} />,
      demoUrl: '/premium/templates/blog-demo',
      category: 'Content'
    }
  ];

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h1" gutterBottom>
            Premium Pages
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Professional page templates with advanced animations and features
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {pages.map((page, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: (theme) => theme.shadows[10],
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={page.image}
                      alt={page.title}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        bgcolor: 'primary.main',
                        color: 'white',
                        p: 1,
                        borderRadius: 1
                      }}
                    >
                      {page.price}
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {page.icon}
                      <Typography variant="h5" sx={{ ml: 2 }}>
                        {page.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {page.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={page.category}
                        color="primary"
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                    <Typography variant="subtitle2" gutterBottom>
                      Features:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {page.features.map((feature, i) => (
                        <Chip
                          key={i}
                          label={feature}
                          size="small"
                          sx={{
                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                            color: 'white'
                          }}
                        />
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                      <Button
                        component={Link}
                        to={page.demoUrl}
                        variant="outlined"
                        color="primary"
                      >
                        Live Demo
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                          color: 'white'
                        }}
                      >
                        Purchase
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default PagesPage; 