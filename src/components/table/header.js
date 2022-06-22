import { Tooltip, IconButton, TableCell, TableRow, TableHead } from '@mui/material';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import { ICON_FONT_SIZE, TABLE_BG_HEADER } from '../../services';
import { memo } from 'react';

const MyTableHeader = (props) => {
    const { headers, ...tableHeaderProps } = { ...props };
    return <TableHead>
        <TableRow>
            {headers.map((header) => {
                return (
                    <TableCell {...tableHeaderProps} key={header.key} sx={{ background: TABLE_BG_HEADER }}>
                        {header.label}
                        {header.info && <Tooltip title={header.info}>
                            <IconButton>
                                <InfoIcon fontSize={ICON_FONT_SIZE} />
                            </IconButton>
                        </Tooltip>}
                    </TableCell>
                );
            })}
        </TableRow>
    </TableHead>
};

export default memo(MyTableHeader);