import { TableBody, TableCell, TableRow } from '@mui/material';
import { memo } from 'react';
import { tableHeaderTypes, TABLE_CELL_ALIGNMENT, TABLE_CELL_SIZE } from '../../services';
import Actions from './cells/actions';

const MyTableBody = (props) => {
    const { rows, onAction } = { ...props };
    return <TableBody>
        {rows.map((row, index) => (
            <TableRow hover={true}
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                {row.map((cell) => {
                    let renderValue = cell.value || '-';
                    if (cell.render) renderValue = cell.render()
                    else if (cell.type === tableHeaderTypes.ACTIONS) renderValue = <Actions buttons={cell.buttons} onAction={(type) => onAction(type, row[0]?.value)} />
                    return <TableCell align={TABLE_CELL_ALIGNMENT} size={TABLE_CELL_SIZE} padding='normal' key={`${cell.key}_${index}`}>
                        {renderValue}
                    </TableCell>
                })}
            </TableRow>
        ))}
    </TableBody>
};

export default memo(MyTableBody);