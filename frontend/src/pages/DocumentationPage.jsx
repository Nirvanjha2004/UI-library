import { Container, Typography, Box, Paper } from '@mui/material';
import CodePreview from '../components/CodePreview/CodePreview';

const DocumentationPage = () => {
  const installationCode = `
# Clone the repository
git clone https://github.com/yourusername/your-repo-name.git

# Install dependencies
cd your-repo-name
npm install

# Start the development server
npm start`;

  const basicUsageCode = `
import { motion } from 'framer-motion';

// Basic Animation Example
const MyAnimatedComponent = () => {
  return (
    <motion.div
      animate={{ scale: 1.2 }}
      transition={{ duration: 0.5 }}
    >
      Hello World!
    </motion.div>
  );
};`;

  return (
    <Container maxWidth="lg">
      <Typography variant="h1" gutterBottom>
        Documentation
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" gutterBottom>
          Getting Started
        </Typography>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="body1" paragraph>
            This library provides a collection of reusable React components built with Material-UI and enhanced with Framer Motion animations.
          </Typography>
          <Typography variant="body1">
            Key features:
          </Typography>
          <ul>
            <li>Pre-built animations</li>
            <li>Customizable components</li>
            <li>Interactive controls</li>
            <li>Code previews</li>
            <li>Dark mode support</li>
          </ul>
        </Paper>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" gutterBottom>
          Installation
        </Typography>
        <CodePreview code={installationCode} language="bash" />
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" gutterBottom>
          Basic Usage
        </Typography>
        <CodePreview code={basicUsageCode} language="jsx" />
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" gutterBottom>
          Components
        </Typography>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h3" gutterBottom>
            Animation Components
          </Typography>
          <Typography variant="body1" paragraph>
            Our animation components provide easy-to-use, customizable animations:
          </Typography>
          <ul>
            <li>Bounce</li>
            <li>Pulse</li>
            <li>Shake</li>
            <li>Rotate</li>
            <li>Flip</li>
            <li>Fade</li>
            <li>Morph</li>
            <li>Wave</li>
            <li>Expand</li>
          </ul>
        </Paper>
      </Box>
    </Container>
  );
};

export default DocumentationPage; 