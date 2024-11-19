import { Container, Typography, Grid, Box, TextField, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AnimatedCard from '../../../../../animated-mui-components/src/components/AnimatedCard';
import AnimatedButton from '../../../../../animated-mui-components/src/components/AnimatedButton';

const ContactPageDemo = () => {
  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: 'Our Location',
      details: ['123 Business Street', 'New York, NY 10001', 'United States']
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email Us',
      details: ['contact@example.com', 'support@example.com']
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 765-4321']
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 12,
          mb: -8,
          position: 'relative'
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h1" align="center" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="h5" align="center" sx={{ maxWidth: 600, mx: 'auto' }}>
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Contact Info Cards */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <AnimatedCard
                  animation="fade"
                  hover="lift"
                  sx={{ height: '100%' }}
                >
                  <Box sx={{ p: 3, textAlign: 'center' }}>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {info.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {info.title}
                    </Typography>
                    {info.details.map((detail, i) => (
                      <Typography key={i} color="text.secondary">
                        {detail}
                      </Typography>
                    ))}
                  </Box>
                </AnimatedCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom>
                Send us a Message
              </Typography>
              <Box component="form" sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      required
                    />
                  </Grid>
                </Grid>
                <Box sx={{ mt: 3 }}>
                  <AnimatedButton
                    variant="contained"
                    size="large"
                    fullWidth
                    animation="bounce"
                  >
                    Send Message
                  </AnimatedButton>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Map Placeholder */}
            <Paper
              sx={{
                height: '100%',
                minHeight: 400,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'grey.100'
              }}
            >
              <Typography color="text.secondary">
                Map Integration Placeholder
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* FAQ Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Grid container spacing={3} sx={{ mt: 4 }}>
            {[
              {
                q: "What's your typical response time?",
                a: "We aim to respond to all inquiries within 24 hours during business days."
              },
              {
                q: "Do you offer support outside business hours?",
                a: "Yes, we provide 24/7 emergency support for critical issues."
              },
              {
                q: "Can I schedule a video call?",
                a: "Absolutely! You can schedule a video consultation through our booking system."
              },
              {
                q: "Do you have an office I can visit?",
                a: "Yes, you can visit our office during business hours. Appointments are recommended."
              }
            ].map((faq, index) => (
              <Grid item xs={12} md={6} key={index}>
                <AnimatedCard
                  animation="fade"
                  hover="lift"
                  delay={index * 0.1}
                >
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      {faq.q}
                    </Typography>
                    <Typography color="text.secondary">
                      {faq.a}
                    </Typography>
                  </Box>
                </AnimatedCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPageDemo; 