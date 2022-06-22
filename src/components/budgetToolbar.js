import { Button, Input } from "../components";
import { BUDGET_PAGE_BTN, SEARCH_INPUT_PLACEHOLDER, TEXT_FIELD_SIZE } from '../services';
import { Grid } from '@mui/material';
import { memo } from "react";

const BudgetToolbar = (props) => {
    const { onSearch } = {...props};
    return <Grid container className='toolbar'>
        <Grid item>
            <Button>{BUDGET_PAGE_BTN}</Button>
        </Grid>
        <Grid item>
            <Input label={SEARCH_INPUT_PLACEHOLDER} autoFocus={true} size={TEXT_FIELD_SIZE} onChange={onSearch} />
        </Grid>
    </Grid>
};

export default memo(BudgetToolbar);