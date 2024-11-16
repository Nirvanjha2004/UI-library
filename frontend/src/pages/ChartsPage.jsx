import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedChart from '../../../animated-mui-components/src/components/AnimatedChart';

const ChartsPage = () => {
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 700 }
  ];

  const chartExamples = [
    {
      title: 'Line Chart with Fade In',
      component: (
        <AnimatedChart
          type="line"
          data={data}
          dataKey="value"
          animation="fadeIn"
          color="#8884d8"
        />
      ),
      code: `
<AnimatedChart
  type="line"
  data={data}
  dataKey="value"
  animation="fadeIn"
  color="#8884d8"
/>`
    },
    {
      title: 'Area Chart with Slide Up',
      component: (
        <AnimatedChart
          type="area"
          data={data}
          dataKey="value"
          animation="slideUp"
          color="#82ca9d"
        />
      ),
      code: `
<AnimatedChart
  type="area"
  data={data}
  dataKey="value"
  animation="slideUp"
  color="#82ca9d"
/>`
    },
    {
      title: 'Bar Chart with Scale',
      component: (
        <AnimatedChart
          type="bar"
          data={data}
          dataKey="value"
          animation="scale"
          color="#8884d8"
        />
      ),
      code: `
<AnimatedChart
  type="bar"
  data={data}
  dataKey="value"
  animation="scale"
  color="#8884d8"
/>`
    }
  ];

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1" gutterBottom>
          Animated Charts
        </Typography>
        <Typography variant="body1" paragraph>
          Beautiful animated charts built with Recharts.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {chartExamples.map((example, index) => (
            <Grid item xs={12} key={index}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  {example.title}
                </Typography>
                <Box sx={{ mb: 2, height: 300 }}>
                  {example.component}
                </Box>
                <CodePreview code={example.code} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default ChartsPage; 