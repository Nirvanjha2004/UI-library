import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import AnimatedFileUpload from '../components/Upload/AnimatedFileUpload';
import CodePreview from '../components/CodePreview/CodePreview';
import { useToast } from '../App';

const UploadPage = () => {
  const { showToast } = useToast();

  const handleUpload = async (files) => {
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    showToast(`Successfully uploaded ${files.length} file(s)!`, 'success');
  };

  const uploadExample = `
import { AnimatedFileUpload } from 'your-ui-library';

const handleUpload = async (files) => {
  try {
    // Handle file upload logic
    await uploadFiles(files);
  } catch (error) {
    console.error('Upload failed:', error);
  }
};

<AnimatedFileUpload
  onUpload={handleUpload}
  maxSize={5242880} // 5MB
  acceptedFiles={{ 'image/*': [] }}
  multiple={false}
/>`;

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1" gutterBottom>
          File Upload
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Drag and drop file upload component with animations and preview.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Image Upload
            </Typography>
            <AnimatedFileUpload
              onUpload={handleUpload}
              acceptedFiles={{ 'image/*': [] }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Multiple Files Upload
            </Typography>
            <AnimatedFileUpload
              onUpload={handleUpload}
              multiple
              acceptedFiles={{
                'image/*': [],
                'application/pdf': [],
                'application/msword': [],
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document': []
              }}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <CodePreview code={uploadExample} />
        </Box>
      </motion.div>
    </Container>
  );
};

export default UploadPage; 