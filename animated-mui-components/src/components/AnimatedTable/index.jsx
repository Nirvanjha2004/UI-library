import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slideIn: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 }
  },
  scale: {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 }
  }
};

const hoverEffects = {
  highlight: {
    backgroundColor: 'rgba(0, 0, 0, 0.04)'
  },
  glow: {
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)'
  },
  lift: {
    y: -2,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  }
};

const AnimatedTable = ({
  columns,
  rows,
  page = 0,
  rowsPerPage = 5,
  onPageChange,
  onRowsPerPageChange,
  animation = 'fade',
  hover = 'highlight',
  stickyHeader = false,
  dense = false,
  ...props
}) => {
  const MotionTableRow = motion(TableRow);
  const animationConfig = animations[animation];
  const hoverConfig = hoverEffects[hover];

  const displayedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper {...props}>
      <TableContainer>
        <Table size={dense ? 'small' : 'medium'} stickyHeader={stickyHeader}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <AnimatePresence mode="wait">
              {displayedRows.map((row, index) => (
                <MotionTableRow
                  key={index}
                  hover
                  initial={animationConfig.initial}
                  animate={animationConfig.animate}
                  exit={animationConfig.exit}
                  whileHover={hoverConfig}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.05
                  }}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </MotionTableRow>
              ))}
            </AnimatePresence>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </Paper>
  );
};

AnimatedTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      minWidth: PropTypes.number,
      align: PropTypes.oneOf(['left', 'right', 'center']),
      format: PropTypes.func
    })
  ).isRequired,
  rows: PropTypes.array.isRequired,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  animation: PropTypes.oneOf(['fade', 'slideIn', 'scale']),
  hover: PropTypes.oneOf(['highlight', 'glow', 'lift']),
  stickyHeader: PropTypes.bool,
  dense: PropTypes.bool
};

export default AnimatedTable; 