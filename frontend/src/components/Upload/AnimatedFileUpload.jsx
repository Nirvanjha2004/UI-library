import { Box, Typography, Paper, CircularProgress } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';

const UploadZone = styled(Paper)(({ theme, isDragActive, isSuccess }) => ({
  padding: theme.spacing(4),
  border: `2px dashed ${isDragActive ? theme.palette.primary.main : theme.palette.divider}`,
  backgroundColor: isDragActive ? theme.palette.action.hover : theme.palette.background.paper,
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  minHeight: 200,
  transition: 'all 0.3s ease',
  ...(isSuccess && {
    borderColor: theme.palette.success.main,
    color: theme.palette.success.main,
  }),
}));

const Preview = styled('img')({
  maxWidth: '100%',
  maxHeight: 200,
  objectFit: 'contain',
  marginTop: 16,
});

const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const iconVariants = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { type: "spring", stiffness: 200 } },
  hover: { scale: 1.1, rotate: 5 }
};

const AnimatedFileUpload = ({ 
  onUpload,
  maxSize = 5242880, // 5MB
  acceptedFiles = {'image/*': []},
  multiple = false,
  ...props 
}) => {
  const [uploadStatus, setUploadStatus] = useState('idle'); // idle, uploading, success, error
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback(async (acceptedFiles) => {
    try {
      setUploadStatus('uploading');
      
      // If it's an image, create preview
      if (acceptedFiles[0]?.type.startsWith('image/')) {
        const url = URL.createObjectURL(acceptedFiles[0]);
        setPreview(url);
      }

      // Handle upload
      if (onUpload) {
        await onUpload(acceptedFiles);
      }
      
      setUploadStatus('success');
    } catch (error) {
      setUploadStatus('error');
      console.error('Upload error:', error);
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize,
    accept: acceptedFiles,
    multiple
  });

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <UploadZone
        {...getRootProps()}
        isDragActive={isDragActive}
        isSuccess={uploadStatus === 'success'}
      >
        <input {...getInputProps()} {...props} />
        <AnimatePresence mode="wait">
          {uploadStatus === 'uploading' ? (
            <motion.div
              key="uploading"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <CircularProgress size={50} />
            </motion.div>
          ) : uploadStatus === 'success' ? (
            <motion.div
              key="success"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <CheckCircleIcon sx={{ fontSize: 50 }} color="success" />
            </motion.div>
          ) : (
            <motion.div
              key="upload"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <CloudUploadIcon sx={{ fontSize: 50, mb: 2 }} color="primary" />
              <Typography variant="h6" gutterBottom>
                {isDragActive ? 'Drop files here' : 'Drag & drop files here'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                or click to select files
              </Typography>
            </motion.div>
          )}
        </AnimatePresence>
        {preview && (
          <Box mt={2}>
            <Preview src={preview} alt="Upload preview" />
          </Box>
        )}
      </UploadZone>
    </motion.div>
  );
};

AnimatedFileUpload.propTypes = {
  onUpload: PropTypes.func.isRequired,
  maxSize: PropTypes.number,
  acceptedFiles: PropTypes.object,
  multiple: PropTypes.bool,
};

AnimatedFileUpload.defaultProps = {
  maxSize: 5242880,
  acceptedFiles: {'image/*': []},
  multiple: false,
};

export default AnimatedFileUpload; 