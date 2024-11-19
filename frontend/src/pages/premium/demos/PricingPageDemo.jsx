import { Container, Typography, Grid, Box, Paper, Switch, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import AnimatedCard from '../../../../../animated-mui-components/src/components/AnimatedCard';
import AnimatedButton from '../../../../../animated-mui-components/src/components/AnimatedButton';

const PricingPageDemo = () => {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      title: 'Basic',
      price: annual ? '$99/year' : '$9/month',
      description: 'Perfect for starters',
      features: [
        { included: true, text: '1 User' },
        { included: true, text: 'Basic Features' },
        { included: true, text: 'Email Support' },
        { included: false, text: 'Advanced Features' },
        { included: false, text: 'Priority Support' },
        { included: false, text: 'Custom Branding' }
      ],
      color: 'primary.light'
    },
    {
      title: 'Pro',
      price: annual ? '$199/year' : '$19/month',
      description: 'Most popular choice',
      features: [
        { included: true, text: '5 Users' },
        { included: true, text: 'Basic Features' },
        { included: true, text: 'Priority Support' },
        { included: true, text: 'Advanced Features' },
        { included: true, text: 'Analytics' },
        { included: false, text: 'Custom Branding' }
      ],
      color: 'primary.main',
      popular: true
    },
    {
      title: 'Enterprise',
      price: annual ? '$999/year' : '$99/month',
      description: 'For large teams',
      features: [
        { included: true, text: 'Unlimited Users' },
        { included: true, text: 'All Features' },
        { included: true, text: '24/7 Support' },
        { included: true, text: 'Custom Development' },
        { included: true, text: 'Advanced Analytics' },
        { included: true, text: 'Custom Branding' }
      ],
      color: 'primary.dark'
    }
  ];

  const faqs = [
    {
      q: 'Can I change plans later?',
      a: 'Yes, you can upgrade or downgrade your plan at any time.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major credit cards and PayPal.'
    },
    {
      q: 'Is there a free trial?',
      a: 'Yes, all plans come with a 14-day free trial.'
    },
    {
      q: 'What happens after my trial?',
      a: "You'll only be charged if you decide to continue using our services."
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', pb: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h1" gutterBottom>
              Simple, Transparent Pricing
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              Choose the perfect plan for your needs
            </Typography>
            
            {/* Billing Toggle */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4 }}>
              <Typography color={!annual ? 'primary' : 'text.secondary'}>Monthly</Typography>
              <Switch
                checked={annual}
                onChange={() => setAnnual(!annual)}
                color="primary"
                sx={{ mx: 2 }}
              />
              <Typography color={annual ? 'primary' : 'text.secondary'}>
                Annual
                <Chip
                  label="Save 20%"
                  size="small"
                  color="primary"
                  sx={{ ml: 1 }}
                />
              </Typography>
            </Box>
          </Box>

          {/* Pricing Cards */}
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {plans.map((plan, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AnimatedCard
                    hover="lift"
                    sx={{
                      position: 'relative',
                      overflow: 'visible',
                      ...(plan.popular && {
                        mt: -2,
                        mb: -2,
                        transform: 'scale(1.05)'
                      })
                    }}
                  >
                    {plan.popular && (
                      <Chip
                        label="Most Popular"
                        color="primary"
                        sx={{
                          position: 'absolute',
                          top: -16,
                          right: 24,
                          height: 32
                        }}
                      />
                    )}
                    <Box sx={{ p: 4 }}>
                      <Typography variant="h4" gutterBottom>
                        {plan.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {plan.description}
                      </Typography>
                      <Typography variant="h3" color={plan.color} sx={{ mb: 4 }}>
                        {plan.price}
                      </Typography>
                      <Box sx={{ mb: 4 }}>
                        {plan.features.map((feature, i) => (
                          <Box
                            key={i}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              mb: 2,
                              color: feature.included ? 'text.primary' : 'text.disabled'
                            }}
                          >
                            {feature.included ? (
                              <CheckIcon color="success" sx={{ mr: 1 }} />
                            ) : (
                              <CloseIcon color="disabled" sx={{ mr: 1 }} />
                            )}
                            <Typography>{feature.text}</Typography>
                          </Box>
                        ))}
                      </Box>
                      <AnimatedButton
                        variant="contained"
                        fullWidth
                        size="large"
                        animation="bounce"
                        sx={{
                          bgcolor: plan.color,
                          '&:hover': {
                            bgcolor: plan.color
                          }
                        }}
                      >
                        Get Started
                      </AnimatedButton>
                    </Box>
                  </AnimatedCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* FAQ Section */}
          <Box sx={{ mt: 12, textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom>
              Frequently Asked Questions
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
              {faqs.map((faq, index) => (
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
                      <Typography variant="body2" color="text.secondary">
                        {faq.a}
                      </Typography>
                    </Box>
                  </AnimatedCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PricingPageDemo; 