import { Container, Typography, Grid, Box, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import GradientIcon from '@mui/icons-material/Gradient';
import PaletteIcon from '@mui/icons-material/Palette';

const ThemesPage = () => {
  const themes = [
    {
      title: 'Dark Pro Theme',
      description: 'Professional dark theme with smooth animations and transitions',
      image: 'https://source.unsplash.com/random/800x600/?dark',
      price: '$69',
      features: [
        'Dark Mode Optimized',
        'Custom Components',
        'Animated Transitions',
        'Color Schemes',
        'Typography System',
        'Responsive Design'
      ],
      icon: <DarkModeIcon sx={{ fontSize: 40 }} />,
      demoUrl: '/premium/themes/dark-demo',
      category: 'Dark Theme'
    },
    {
      title: 'Light Pro Theme',
      description: 'Clean and modern light theme with premium features',
      image: 'https://source.unsplash.com/random/800x600/?light',
      price: '$69',
      features: [
        'Light Mode Optimized',
        'Premium Components',
        'Smooth Animations',
        'Color Palettes',
        'Font System',
        'Mobile First'
      ],
      icon: <LightModeIcon sx={{ fontSize: 40 }} />,
      demoUrl: '/premium/themes/light-demo',
      category: 'Light Theme'
    },
    {
      title: 'Gradient Theme',
      description: 'Beautiful gradient theme with animated color transitions',
      image: 'https://source.unsplash.com/random/800x600/?gradient',
      price: '$79',
      features: [
        'Gradient Effects',
        'Animated Colors',
        'Glass Morphism',
        'Custom Shadows',
        'Color Modes',
        'Unique Components'
      ],
      icon: <GradientIcon sx={{ fontSize: 40 }} />,
      demoUrl: '/premium/themes/gradient-demo',
      category: 'Gradient Theme'
    },
    {
      title: 'Custom Theme Builder',
      description: 'Create your own theme with our advanced theme builder',
      image: 'https://source.unsplash.com/random/800x600/?theme',
      price: '$99',
      features: [
        'Theme Generator',
        'Color Picker',
        'Component Preview',
        'Export Options',
        'Live Editor',
        'Theme Templates'
      ],
      icon: <PaletteIcon sx={{ fontSize: 40 }} />,
      demoUrl: '/premium/themes/builder-demo',
      category: 'Theme Builder'
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
            Premium Themes
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Professional themes with advanced animations and customization options
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {themes.map((theme, index) => (
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
                      image={theme.image}
                      alt={theme.title}
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
                      {theme.price}
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {theme.icon}
                      <Typography variant="h5" sx={{ ml: 2 }}>
                        {theme.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {theme.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={theme.category}
                        color="primary"
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                    <Typography variant="subtitle2" gutterBottom>
                      Features:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {theme.features.map((feature, i) => (
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
                        to={theme.demoUrl}
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

export default ThemesPage; 