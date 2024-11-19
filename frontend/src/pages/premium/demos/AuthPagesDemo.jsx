import { Container, Typography, Grid, Box, Paper, TextField, Checkbox, FormControlLabel, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedCard from '../../../../../animated-mui-components/src/components/AnimatedCard';
import AnimatedButton from '../../../../../animated-mui-components/src/components/AnimatedButton';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

const AuthPagesDemo = () => {
  const [authType, setAuthType] = useState('login');

  const handleAuthTypeChange = (type) => {
    setAuthType(type);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            Authentication Pages
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Beautiful and secure authentication pages with smooth animations
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {/* Login Form */}
            <Grid item xs={12} md={6}>
              <AnimatedCard
                animation="slideUp"
                hover="lift"
              >
                <Box sx={{ p: 4 }}>
                  <Typography variant="h4" gutterBottom>
                    Login
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                    <AnimatedButton
                      fullWidth
                      variant="outlined"
                      startIcon={<GoogleIcon />}
                      animation="scale"
                    >
                      Google
                    </AnimatedButton>
                    <AnimatedButton
                      fullWidth
                      variant="outlined"
                      startIcon={<FacebookIcon />}
                      animation="scale"
                    >
                      Facebook
                    </AnimatedButton>
                    <AnimatedButton
                      fullWidth
                      variant="outlined"
                      startIcon={<TwitterIcon />}
                      animation="scale"
                    >
                      Twitter
                    </AnimatedButton>
                  </Box>
                  <Divider sx={{ my: 3 }}>OR</Divider>
                  <Box component="form" sx={{ mt: 2 }}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      margin="normal"
                      InputProps={{
                        startAdornment: <EmailIcon sx={{ mr: 1, color: 'text.secondary' }} />
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Password"
                      type="password"
                      margin="normal"
                      InputProps={{
                        startAdornment: <LockIcon sx={{ mr: 1, color: 'text.secondary' }} />
                      }}
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Remember me"
                      sx={{ mt: 1 }}
                    />
                    <AnimatedButton
                      fullWidth
                      variant="contained"
                      size="large"
                      sx={{ mt: 3 }}
                      animation="bounce"
                    >
                      Sign In
                    </AnimatedButton>
                  </Box>
                </Box>
              </AnimatedCard>
            </Grid>

            {/* Registration Form */}
            <Grid item xs={12} md={6}>
              <AnimatedCard
                animation="slideUp"
                hover="lift"
                delay={0.2}
              >
                <Box sx={{ p: 4 }}>
                  <Typography variant="h4" gutterBottom>
                    Register
                  </Typography>
                  <Box component="form" sx={{ mt: 2 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="First Name"
                          InputProps={{
                            startAdornment: <PersonIcon sx={{ mr: 1, color: 'text.secondary' }} />
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Last Name"
                          InputProps={{
                            startAdornment: <PersonIcon sx={{ mr: 1, color: 'text.secondary' }} />
                          }}
                        />
                      </Grid>
                    </Grid>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      margin="normal"
                      InputProps={{
                        startAdornment: <EmailIcon sx={{ mr: 1, color: 'text.secondary' }} />
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Password"
                      type="password"
                      margin="normal"
                      InputProps={{
                        startAdornment: <LockIcon sx={{ mr: 1, color: 'text.secondary' }} />
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Confirm Password"
                      type="password"
                      margin="normal"
                      InputProps={{
                        startAdornment: <LockIcon sx={{ mr: 1, color: 'text.secondary' }} />
                      }}
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="I agree to the Terms and Conditions"
                      sx={{ mt: 1 }}
                    />
                    <AnimatedButton
                      fullWidth
                      variant="contained"
                      size="large"
                      sx={{ mt: 3 }}
                      animation="bounce"
                    >
                      Create Account
                    </AnimatedButton>
                  </Box>
                </Box>
              </AnimatedCard>
            </Grid>

            {/* Features */}
            <Grid item xs={12}>
              <Box sx={{ mt: 6 }}>
                <Typography variant="h4" gutterBottom align="center">
                  Features
                </Typography>
                <Grid container spacing={3}>
                  {[
                    'Social Authentication',
                    'Form Validation',
                    'Password Strength',
                    'Email Verification',
                    'Two-Factor Auth',
                    'Password Reset',
                    'Remember Me',
                    'Terms Agreement'
                  ].map((feature, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Paper
                          sx={{
                            p: 2,
                            textAlign: 'center',
                            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                            color: 'white'
                          }}
                        >
                          {feature}
                        </Paper>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AuthPagesDemo; 