import { Container, Typography, Grid, Box, Paper, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedUpload from '../../../../../animated-mui-components/src/components/AnimatedUpload/index';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ImageIcon from '@mui/icons-material/Image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArticleIcon from '@mui/icons-material/Article';

const FileUploadDemo = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (newFiles) => {
    setUploading(true);
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setFiles(prev => [...prev, ...newFiles]);
    setUploading(false);
  };

  const handleDelete = (fileToDelete) => {
    setFiles(files.filter(file => file !== fileToDelete));
  };

  const getFileIcon = (fileType) => {
    if (fileType.startsWith('image/')) return <ImageIcon />;
    if (fileType === 'application/pdf') return <PictureAsPdfIcon />;
    return <ArticleIcon />;
  };

  const uploadExamples = [
    {
      title: 'Basic File Upload',
      component: (
        <AnimatedUpload
          onUpload={handleUpload}
          maxFiles={5}
          maxSize={5000000}
          accept="image/*,application/pdf"
          animation="fade"
          icon={<CloudUploadIcon sx={{ fontSize: 48 }} />}
          title="Drag & Drop files here"
          subtitle="or click to browse"
        />
      ),
      description: 'Simple drag and drop file upload with animation'
    },
    {
      title: 'Image Gallery Upload',
      component: (
        <AnimatedUpload
          onUpload={handleUpload}
          maxFiles={9}
          maxSize={10000000}
          accept="image/*"
          animation="grid"
          layout="grid"
          icon={<ImageIcon sx={{ fontSize: 48 }} />}
          title="Upload Images"
          subtitle="Create a gallery"
          previewType="grid"
        />
      ),
      description: 'Grid layout for image uploads with preview'
    },
    {
      title: 'File List Upload',
      component: (
        <AnimatedUpload
          onUpload={handleUpload}
          files={files}
          onDelete={handleDelete}
          maxFiles={10}
          maxSize={20000000}
          accept="*/*"
          animation="list"
          layout="list"
          icon={<ArticleIcon sx={{ fontSize: 48 }} />}
          title="Upload Files"
          subtitle="Any file type"
          previewType="list"
          getFileIcon={getFileIcon}
          uploading={uploading}
        />
      ),
      description: 'List layout with file type icons and progress'
    }
  ];

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" gutterBottom>
          File Upload Components
        </Typography>

        <Grid container spacing={4}>
          {uploadExamples.map((example, index) => (
            <Grid item xs={12} key={index}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3,
                  height: '100%',
                  backgroundColor: 'background.paper'
                }}
              >
                <Typography variant="h5" gutterBottom>
                  {example.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {example.description}
                </Typography>
                <Box sx={{ mt: 3 }}>
                  {example.component}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            Features
          </Typography>
          <Grid container spacing={2}>
            {[
              'Drag & Drop Support',
              'Multiple File Upload',
              'File Type Validation',
              'Size Restrictions',
              'Progress Tracking',
              'Preview Generation',
              'Grid & List Layouts',
              'Custom Animations'
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
      </motion.div>
    </Container>
  );
};

export default FileUploadDemo; 