import { ImageList, ImageListItem, Modal, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const StyledImageListItem = styled(motion(ImageListItem))(({ theme }) => ({
  cursor: 'pointer',
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius,
}));

const LightboxModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));

const imageVariants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 },
  hover: { scale: 1.05 }
};

const modalVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const AnimatedGallery = ({ 
  images,
  cols = 3,
  gap = 8,
  rowHeight = 200,
  ...props 
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    setSelectedImage(images[currentIndex > 0 ? currentIndex - 1 : images.length - 1]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    setSelectedImage(images[currentIndex < images.length - 1 ? currentIndex + 1 : 0]);
  };

  return (
    <>
      <ImageList cols={cols} gap={gap} rowHeight={rowHeight} {...props}>
        {images.map((image, index) => (
          <StyledImageListItem
            key={image.id || index}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            onClick={() => handleImageClick(image, index)}
          >
            <img
              src={image.src}
              alt={image.alt || `Image ${index + 1}`}
              loading="lazy"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </StyledImageListItem>
        ))}
      </ImageList>

      <AnimatePresence>
        {selectedImage && (
          <LightboxModal
            open={Boolean(selectedImage)}
            onClose={handleClose}
            closeAfterTransition
          >
            <motion.div
              variants={modalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '90vh',
              }}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                style={{
                  maxWidth: '100%',
                  maxHeight: '90vh',
                  objectFit: 'contain',
                }}
              />
              <NavigationButton
                onClick={handlePrevious}
                sx={{ left: 16, top: '50%', transform: 'translateY(-50%)' }}
              >
                <NavigateBeforeIcon />
              </NavigationButton>
              <NavigationButton
                onClick={handleNext}
                sx={{ right: 16, top: '50%', transform: 'translateY(-50%)' }}
              >
                <NavigateNextIcon />
              </NavigationButton>
              <IconButton
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  },
                }}
              >
                <CloseIcon />
              </IconButton>
            </motion.div>
          </LightboxModal>
        )}
      </AnimatePresence>
    </>
  );
};

AnimatedGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
  cols: PropTypes.number,
  gap: PropTypes.number,
  rowHeight: PropTypes.number,
};

export default AnimatedGallery; 