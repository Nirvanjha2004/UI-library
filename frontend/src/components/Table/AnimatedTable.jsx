import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  Paper,
  Checkbox,
  Collapse,
  IconButton,
  Box,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TableToolbar from './TableToolbar';

const StyledTableRow = styled(motion(TableRow))(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:hover': {
    backgroundColor: theme.palette.action.selected,
  },
}));

const rowVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

const AnimatedTable = ({
  columns,
  data,
  title = "Data Table",
  selectable = false,
  expandable = false,
  renderExpandedRow,
  onDelete,
  onRowClick,
  filters,
  ...props
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedRow, setExpandedRow] = useState(null);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelected(data.map(row => row.id));
    } else {
      setSelected([]);
    }
  };

  const handleClick = (id) => {
    if (selectable) {
      const selectedIndex = selected.indexOf(id);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }

      setSelected(newSelected);
    }
    onRowClick?.(id);
  };

  const handleExportCSV = () => {
    const headers = columns.map(col => col.label).join(',');
    const rows = data.map(row => 
      columns.map(col => row[col.id]).join(',')
    ).join('\n');
    
    const csvContent = `${headers}\n${rows}`;
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${title.toLowerCase().replace(/\s+/g, '-')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sortedAndFilteredData = useMemo(() => {
    let processedData = [...data];

    if (searchQuery) {
      processedData = processedData.filter(row =>
        Object.values(row).some(value =>
          String(value).toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    if (orderBy) {
      processedData.sort((a, b) => {
        const aValue = a[orderBy];
        const bValue = b[orderBy];
        return (order === 'asc' ? 1 : -1) * (aValue < bValue ? -1 : 1);
      });
    }

    return processedData;
  }, [data, searchQuery, orderBy, order]);

  const paginatedData = sortedAndFilteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper elevation={2}>
      <TableToolbar
        numSelected={selected.length}
        title={title}
        onDelete={selected.length > 0 ? () => onDelete?.(selected) : undefined}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onExportCSV={handleExportCSV}
        filters={filters}
        onFilterChange={(newFilters) => console.log('Filters:', newFilters)}
      />

      <TableContainer>
        <Table {...props}>
          <TableHead>
            <TableRow>
              {expandable && <TableCell />}
              {selectable && (
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={selected.length > 0 && selected.length < data.length}
                    checked={data.length > 0 && selected.length === data.length}
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
              )}
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sortDirection={orderBy === column.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : 'asc'}
                    onClick={() => handleRequestSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <AnimatePresence>
              {paginatedData.map((row, index) => (
                <>
                  <StyledTableRow
                    key={row.id}
                    variants={rowVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleClick(row.id)}
                    selected={selected.indexOf(row.id) !== -1}
                  >
                    {expandable && (
                      <TableCell>
                        <IconButton
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedRow(expandedRow === row.id ? null : row.id);
                          }}
                        >
                          {expandedRow === row.id ? 
                            <KeyboardArrowUpIcon /> : 
                            <KeyboardArrowDownIcon />
                          }
                        </IconButton>
                      </TableCell>
                    )}
                    {selectable && (
                      <TableCell padding="checkbox">
                        <Checkbox checked={selected.indexOf(row.id) !== -1} />
                      </TableCell>
                    )}
                    {columns.map((column) => (
                      <TableCell key={column.id}>
                        {column.render ? column.render(row) : row[column.id]}
                      </TableCell>
                    ))}
                  </StyledTableRow>
                  {expandable && renderExpandedRow && (
                    <TableRow>
                      <TableCell colSpan={columns.length + (selectable ? 2 : 1)}>
                        <Collapse in={expandedRow === row.id}>
                          <Box sx={{ py: 2 }}>
                            {renderExpandedRow(row)}
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ))}
            </AnimatePresence>
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={sortedAndFilteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(event, newPage) => setPage(newPage)}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        }}
      />
    </Paper>
  );
};

AnimatedTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      render: PropTypes.func,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  selectable: PropTypes.bool,
  expandable: PropTypes.bool,
  renderExpandedRow: PropTypes.func,
  onDelete: PropTypes.func,
  onRowClick: PropTypes.func,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.any,
    })
  ),
};

export default AnimatedTable; 