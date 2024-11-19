import { Container, Typography, Grid, Box, IconButton, Avatar, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import DevicesIcon from '@mui/icons-material/Devices';
import AnimatedCard from '../../../../../animated-mui-components/src/components/AnimatedCard';
import AnimatedButton from '../../../../../animated-mui-components/src/components/AnimatedButton';

const PortfolioDemo = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'GraphQL', 'Material-UI',
    'Next.js', 'MongoDB', 'AWS', 'Docker', 'Figma'
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with advanced features',
      image: 'https://source.unsplash.com/random/800x600/?ecommerce',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Social Media App',
      description: 'Real-time social networking platform',
      image: 'https://source.unsplash.com/random/800x600/?socialmedia',
      technologies: ['React Native', 'Firebase'],
      link: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization and analytics platform',
      image: 'https://source.unsplash.com/random/800x600/?analytics',
      technologies: ['React', 'D3.js', 'GraphQL'],
      link: '#'
    }
  ];

  const services = [
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: 'Web Development',
      description: 'Building modern web applications with cutting-edge technologies'
    },
    {
      icon: <BrushIcon sx={{ fontSize: 40 }} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces'
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 40 }} />,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
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
                  John Doe
                </Typography>
                <Typography variant="h4" sx={{ mb: 4 }}>
                  Full Stack Developer
                </Typography>
                <Typography variant="h6" paragraph>
                  Building beautiful and functional web applications
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <AnimatedButton
                    variant="contained"
                    color="secondary"
                    size="large"
                    animation="bounce"
                  >
                    View Projects
                  </AnimatedButton>
                  <AnimatedButton
                    variant="outlined"
                    color="inherit"
                    size="large"
                    animation="pulse"
                  >
                    Contact Me
                  </AnimatedButton>
                </Box>
                <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                  <IconButton color="inherit">
                    <GitHubIcon />
                  </IconButton>
                  <IconButton color="inherit">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton color="inherit">
                    <TwitterIcon />
                  </IconButton>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Avatar
                  src="/images/portfolio/profile.jpg"
                  sx={{
                    width: 400,
                    height: 400,
                    mx: 'auto',
                    border: '4px solid white'
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Skills & Technologies
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mt: 4 }}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Chip
                label={skill}
                color="primary"
                sx={{
                  fontSize: '1rem',
                  py: 2,
                  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
                }}
              />
            </motion.div>
          ))}
        </Box>
      </Container>

      {/* Projects Section */}
      <Box sx={{ bgcolor: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            Featured Projects
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <AnimatedCard
                  animation="slideUp"
                  hover="lift"
                  delay={index * 0.2}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: '100%',
                      height: 240,
                      objectFit: 'cover'
                    }}
                  />
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h5" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.technologies.map((tech) => (
                        <Chip key={tech} label={tech} size="small" />
                      ))}
                    </Box>
                    <AnimatedButton
                      variant="outlined"
                      fullWidth
                      href={project.link}
                      animation="pulse"
                    >
                      View Project
                    </AnimatedButton>
                  </Box>
                </AnimatedCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Services
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <AnimatedCard
                animation="fade"
                hover="lift"
                delay={index * 0.2}
              >
                <Box sx={{ p: 3, textAlign: 'center' }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </Box>
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            Let's Work Together
          </Typography>
          <Typography variant="h6" align="center" paragraph>
            Have a project in mind? Let's discuss how I can help.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <AnimatedButton
              variant="contained"
              color="secondary"
              size="large"
              animation="bounce"
            >
              Get in Touch
            </AnimatedButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default PortfolioDemo; 