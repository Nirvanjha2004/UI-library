import { Container, Typography, Grid, Box, Paper, IconButton, Button, Card, CardContent, CardMedia, Rating, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import MarketingIcon from '@mui/icons-material/Campaign';
import AnimatedCard from '../../../../../animated-mui-components/src/components/AnimatedCard';
import AnimatedButton from '../../../../../animated-mui-components/src/components/AnimatedButton';

const services = [
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies'
  },
  {
    icon: <BrushIcon sx={{ fontSize: 40 }} />,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that engage users'
  },
  {
    icon: <CameraAltIcon sx={{ fontSize: 40 }} />,
    title: 'Photography',
    description: 'Professional photography services for your brand'
  },
  {
    icon: <MarketingIcon sx={{ fontSize: 40 }} />,
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns to grow your business'
  }
];

const projects = [
  {
    title: 'E-commerce Platform',
    image: 'https://source.unsplash.com/random/800x600/?ecommerce',
    category: 'Web Development',
    description: 'Modern e-commerce solution with advanced features'
  },
  {
    title: 'Brand Identity',
    image: 'https://source.unsplash.com/random/800x600/?branding',
    category: 'Design',
    description: 'Complete brand identity design for startup'
  },
  {
    title: 'Mobile App',
    image: 'https://source.unsplash.com/random/800x600/?mobile-app',
    category: 'Development',
    description: 'Cross-platform mobile application'
  }
];

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, Tech Corp',
    avatar: 'https://i.pravatar.cc/150?img=1',
    content: 'Outstanding service and results. Highly recommended!',
    rating: 5
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Director',
    avatar: 'https://i.pravatar.cc/150?img=2',
    content: 'Professional team that delivers on time and on budget.',
    rating: 5
  }
];

const AgencyDemo = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          pt: 15,
          pb: 20,
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
                  Creative Digital Agency
                </Typography>
                <Typography variant="h5" paragraph>
                  We bring your ideas to life with stunning design and flawless development
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <AnimatedButton
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    animation="slide"
                  >
                    View Our Work
                  </AnimatedButton>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.img
                src="https://source.unsplash.com/random/1200x800/?agency"
                alt="Agency Hero"
                style={{ width: '100%', borderRadius: 16 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ mt: -10, position: 'relative', mb: 8 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <AnimatedCard
                animation="fade"
                hover="lift"
                delay={index * 0.1}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Projects Section */}
      <Box sx={{ bgcolor: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Our Work
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Check out some of our recent projects
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <AnimatedCard
                  animation="slideUp"
                  hover="grow"
                  delay={index * 0.2}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="overline" color="primary">
                      {project.category}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </AnimatedCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Client Testimonials
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <AnimatedCard
                  animation="fade"
                  hover="lift"
                  delay={index * 0.2}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar src={testimonial.avatar} sx={{ width: 60, height: 60, mr: 2 }} />
                      <Box>
                        <Typography variant="h6">{testimonial.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                    <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                    <Typography variant="body1">
                      "{testimonial.content}"
                    </Typography>
                  </CardContent>
                </AnimatedCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AgencyDemo; 