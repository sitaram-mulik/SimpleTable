import { TextField } from '@mui/material';
import { memo } from 'react';
import { TEXT_FIELD_MIN_WIDTH } from '../services';

const MyInput = (props) => {
    return (
        <TextField sx={{ minWidth: TEXT_FIELD_MIN_WIDTH }} {...props} />
    );
};

export default memo(MyInput);