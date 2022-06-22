import { Container, Box, Grid, Tooltip } from '@mui/material';
import { BudgetToolbar, Table } from "../components";
import InfoIcon from '@mui/icons-material/InfoOutlined';
import React, { useCallback, useContext, useMemo } from 'react';
import { BUDGET_PAGE_STATUS, BUDGET_PAGE_STATUS_INFO, data, headers, ICON_FONT_SIZE, transformDataToRows, actionTypes, deleteBudget } from '../services';
import budgetContext from '../context/budgetContext';

const BudgetTable = () => {
    const { budgetData, setBudgetData } = useContext(budgetContext);
    const rows = useMemo(() => transformDataToRows(budgetData, headers), [budgetData]);
    const onSearch = useCallback((e) => {
        const searchKey = e.target.value.trim();
        searchKey ?
            setBudgetData(data.filter((item) => item.name.toLowerCase().search(searchKey.toLowerCase()) !== -1))
            :
            setBudgetData(data);
    }, [setBudgetData]);

    const onAction = useCallback((type, id) => {
        if (type.toLowerCase() === actionTypes.DELETE.toLowerCase()) {
            deleteBudget(id, budgetData, setBudgetData);
        } else {
            window.alert(`Do ${type} ${id}`);
        };
    }, [budgetData, setBudgetData]);

    return (
        <Container maxWidth='xl'>
            <Box sx={{ p: 2, m: 2 }}>
                <BudgetToolbar onSearch={onSearch} />
                <Grid className='table'>
                    <div className='table-info'><span>{BUDGET_PAGE_STATUS}</span><Tooltip title={BUDGET_PAGE_STATUS_INFO}><InfoIcon fontSize={ICON_FONT_SIZE} /></Tooltip></div>
                    <Table rows={rows} headers={headers} onAction={onAction} />
                </Grid>
            </Box>
        </Container>
    )
};

export default BudgetTable;