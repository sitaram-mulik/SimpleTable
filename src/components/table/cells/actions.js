import EditIcon from '@mui/icons-material/EditOutlined';
import { Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import { actionTypes, CHIP_BG, CHIP, ICON_FONT_SIZE, divideButtons, PRIMARY_BTN_BG } from '../../../services';
import { memo, useMemo } from 'react';

const Actions = (props) => {
    const { buttons, onAction } = { ...props };
    const { simpleButtons, iconButtons } = useMemo(() => divideButtons(buttons), [buttons]);
    return <div className='action-wrapper'>
        <div className='simple-action-btns'>
            {simpleButtons.map((btn) => {
                return <Chip sx={{ background: CHIP_BG, color: CHIP, '&:hover ': {color: PRIMARY_BTN_BG} }} label={btn} key={btn} onClick={() => onAction(btn)} />
            })}
        </div>
        <div className='icon-action-btns'>
            {iconButtons.map((btn) => {
                const simpleButtonProps = {
                    key: btn,
                    fontSize: ICON_FONT_SIZE,
                    onClick: () => onAction(btn),
                    sx: {'&:hover': {color: PRIMARY_BTN_BG}} 
                }
                return btn === actionTypes.EDIT ? <EditIcon {...simpleButtonProps} /> : <DeleteIcon {...simpleButtonProps} />
            })}
        </div>
    </div>
};

export default memo(Actions);