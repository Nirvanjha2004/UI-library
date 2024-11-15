import { Card, CardContent, CardMedia, Typography, CardActions, IconButton, Chip, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import PropTypes from 'prop-types';

const StyledCard = styled(motion(Card))(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  cursor: 'pointer',
}));

const cardVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  },
  tap: {
    scale: 0.95
  }
};

const AnimatedCard = ({ 
  title, 
  description, 
  image, 
  tags = [], 
  onFavorite,
  onShare,
  children,
  ...props 
}) => {
  return (
    <StyledCard
      whileHover={cardVariants.hover}
      whileTap={cardVariants.tap}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {image && (
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
        />
      )}
      <CardContent>
        {tags.length > 0 && (
          <Box sx={{ mb: 1.5 }}>
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                sx={{ mr: 0.5, mb: 0.5 }}
              />
            ))}
          </Box>
        )}
        <Typography variant="h6" gutterBottom component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {children}
      </CardContent>
      {(onFavorite || onShare) && (
        <CardActions disableSpacing>
          {onFavorite && (
            <IconButton onClick={onFavorite} aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          )}
          {onShare && (
            <IconButton onClick={onShare} aria-label="share">
              <ShareIcon />
            </IconButton>
          )}
        </CardActions>
      )}
    </StyledCard>
  );
};

AnimatedCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  onFavorite: PropTypes.func,
  onShare: PropTypes.func,
  children: PropTypes.node,
};

export default AnimatedCard; 