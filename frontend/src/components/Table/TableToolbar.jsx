import { 
  Toolbar, 
  Typography, 
  IconButton, 
  Tooltip, 
  TextField,
  Menu,
  MenuItem,
  Box,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useState } from 'react';
import PropTypes from 'prop-types';

const TableToolbar = ({
  numSelected,
  title,
  onDelete,
  searchQuery,
  onSearchChange,
  onExportCSV,
  filters,
  onFilterChange,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeFilters, setActiveFilters] = useState({});

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const handleFilterChange = (filterId, value) => {
    const newFilters = {
      ...activeFilters,
      [filterId]: value,
    };
    setActiveFilters(newFilters);
    onFilterChange?.(newFilters);
    handleFilterClose();
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: 'primary.light',
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {title}
        </Typography>
      )}

      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <TextField
          size="small"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon sx={{ mr: 1 }} />,
          }}
        />

        {filters && (
          <>
            <Tooltip title="Filter list">
              <IconButton onClick={handleFilterClick}>
                <FilterListIcon />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleFilterClose}
            >
              {filters.map((filter) => (
                <MenuItem
                  key={filter.id}
                  onClick={() => handleFilterChange(filter.id, filter.value)}
                >
                  {filter.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        )}

        <Tooltip title="Export to CSV">
          <IconButton onClick={onExportCSV}>
            <FileDownloadIcon />
          </IconButton>
        </Tooltip>

        {numSelected > 0 && onDelete && (
          <Tooltip title="Delete">
            <IconButton onClick={onDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Toolbar>
  );
};

TableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  searchQuery: PropTypes.string,
  onSearchChange: PropTypes.func,
  onExportCSV: PropTypes.func,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.any,
    })
  ),
  onFilterChange: PropTypes.func,
};

export default TableToolbar; 