import { memo } from 'react';
import { Table, TableContainer, Paper, Box } from '@mui/material';
import { TABLE_CELL_ALIGNMENT, TABLE_MAX_HEIGHT, TABLE_MIN_WIDTH } from '../../services';
import TableHead from './header';
import TableBody from './body';

const MyTable = (props) => {
    const { rows, headers, onAction } = { ...props };
    return (
        rows.length ? <TableContainer sx={{ maxHeight: TABLE_MAX_HEIGHT }} component={Paper}>
            <Table stickyHeader={true} sx={{ minWidth: TABLE_MIN_WIDTH }} >
                <TableHead headers={headers} align={TABLE_CELL_ALIGNMENT} />
                <TableBody rows={rows} onAction={(type, id) => onAction(type, id)} />
            </Table>
        </TableContainer> : <Box sx={{ display: 'flex', justifyContent: 'center' }}><strong>No Data to display!</strong></Box>
    );
};

export default memo(MyTable);