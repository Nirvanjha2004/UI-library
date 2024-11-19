import { Box, Typography, Paper, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRef, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  },
  slideUp: {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
  },
  grid: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    transition: { staggerChildren: 0.1 }
  },
  list: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 },
    transition: { staggerChildren: 0.1 }
  }
};

const AnimatedUpload = ({
  onUpload,
  maxFiles = 5,
  maxSize = 5000000, // 5MB
  accept = '*/*',
  animation = 'fade',
  icon = <CloudUploadIcon sx={{ fontSize: 48 }} />,
  title = 'Drag & Drop files here',
  subtitle = 'or click to browse',
  layout = 'default',
  previewType = 'list',
  files = [],
  onDelete,
  getFileIcon,
  uploading = false,
  ...props
}) => {
  const fileInputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState(null);
  const animationConfig = animations[animation];

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const validateFile = (file) => {
    if (maxSize && file.size > maxSize) {
      setError(`File size exceeds ${maxSize / 1000000}MB limit`);
      return false;
    }
    if (accept !== '*/*' && !file.type.match(accept)) {
      setError('File type not accepted');
      return false;
    }
    return true;
  };

  const handleFiles = (newFiles) => {
    setError(null);
    const validFiles = Array.from(newFiles)
      .slice(0, maxFiles - files.length)
      .filter(validateFile);
    
    if (validFiles.length > 0) {
      onUpload(validFiles);
    }
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { files } = e.dataTransfer;
    handleFiles(files);
  };

  const handleChange = (e) => {
    const { files } = e.target;
    handleFiles(files);
  };

  const renderPreview = () => {
    if (!files.length) return null;

    if (previewType === 'grid') {
      return (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: 2, mt: 2 }}>
          {files.map((file, index) => (
            <motion.div
              key={index}
              variants={animations.grid}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Paper
                sx={{
                  p: 1,
                  position: 'relative',
                  aspectRatio: '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {getFileIcon ? getFileIcon(file) : <CloudUploadIcon />}
                {onDelete && (
                  <IconButton
                    size="small"
                    onClick={() => onDelete(file)}
                    sx={{ position: 'absolute', top: 4, right: 4 }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                )}
              </Paper>
            </motion.div>
          ))}
        </Box>
      );
    }

    return (
      <Box sx={{ mt: 2 }}>
        {files.map((file, index) => (
          <motion.div
            key={index}
            variants={animations.list}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Paper sx={{ p: 2, mb: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
              {getFileIcon ? getFileIcon(file) : <CloudUploadIcon />}
              <Typography variant="body2" sx={{ flexGrow: 1 }}>{file.name}</Typography>
              {onDelete && (
                <IconButton size="small" onClick={() => onDelete(file)}>
                  <DeleteIcon />
                </IconButton>
              )}
            </Paper>
          </motion.div>
        ))}
      </Box>
    );
  };

  return (
    <Box {...props}>
      <AnimatePresence>
        <motion.div
          variants={animationConfig}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Paper
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            sx={{
              p: 4,
              textAlign: 'center',
              cursor: 'pointer',
              borderStyle: 'dashed',
              borderWidth: 2,
              borderColor: dragActive ? 'primary.main' : 'divider',
              bgcolor: dragActive ? 'action.hover' : 'background.paper',
              transition: 'all 0.3s ease'
            }}
          >
            {icon}
            <Typography variant="h6" sx={{ mt: 2 }}>{title}</Typography>
            <Typography variant="body2" color="text.secondary">{subtitle}</Typography>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept={accept}
              onChange={handleChange}
              style={{ display: 'none' }}
            />
          </Paper>
        </motion.div>
      </AnimatePresence>

      {error && (
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}

      {uploading && (
        <Box sx={{ mt: 2 }}>
          <LinearProgress />
        </Box>
      )}

      {renderPreview()}
    </Box>
  );
};

AnimatedUpload.propTypes = {
  onUpload: PropTypes.func.isRequired,
  maxFiles: PropTypes.number,
  maxSize: PropTypes.number,
  accept: PropTypes.string,
  animation: PropTypes.oneOf(['fade', 'scale', 'slideUp', 'grid', 'list']),
  icon: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  layout: PropTypes.oneOf(['default', 'grid']),
  previewType: PropTypes.oneOf(['list', 'grid']),
  files: PropTypes.array,
  onDelete: PropTypes.func,
  getFileIcon: PropTypes.func,
  uploading: PropTypes.bool
};

export default AnimatedUpload; 