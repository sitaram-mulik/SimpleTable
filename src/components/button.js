import React, { memo } from 'react';
import { Button } from '@mui/material';
import { BTN_VARIANT, PRIMARY_BTN_BG } from '../services';

function MyButton(props) {
    return (
        <Button variant={BTN_VARIANT} sx={{ backgroundColor: PRIMARY_BTN_BG, borderRadius: 0 }} {...props}  >{props.children}</Button>
    )
};

export default memo(MyButton);