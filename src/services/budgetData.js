import { budgetTableHeader } from "./labels";
import { tableHeaderTypes } from './table';
import { Status } from "../components";
import { actionTypes } from "./actions";

const budgetTableKeys = {
    NAME: 'name',
    DESC: 'description',
    TYPE: 'type',
    PERIOD: 'period',
    START: 'start',
    END: 'end',
    SCOPE: 'scope',
    STATUS: 'status',
    ACTIONS: 'actions'
}

const headers = [
    {
        key: budgetTableKeys.NAME,
        label: budgetTableHeader.NAME
    },
    {
        key: budgetTableKeys.DESC,
        label: budgetTableHeader.DESCRIPTION
    },
    {
        key: budgetTableKeys.TYPE,
        label: budgetTableHeader.TYPE
    },
    {
        key: budgetTableKeys.PERIOD,
        label: budgetTableHeader.PERIOD
    },
    {
        key: budgetTableKeys.START,
        label: budgetTableHeader.START
    },
    {
        key: budgetTableKeys.END,
        label: budgetTableHeader.END
    },
    {
        key: budgetTableKeys.SCOPE,
        label: budgetTableHeader.SCOPE
    },
    {
        key: budgetTableKeys.STATUS,
        label: budgetTableHeader.BUDGET_STATUS,
        type: tableHeaderTypes.STATUS,
        info: budgetTableHeader.BUDGET_STATUS_INFO
    },
    {
        key: budgetTableKeys.ACTIONS,
        label: budgetTableHeader.ACTIONS,
        type: tableHeaderTypes.ACTIONS,
        buttons: [actionTypes.TRENDS, actionTypes.CHARGEBACK, actionTypes.OPTIMIZE, actionTypes.EDIT, actionTypes.DELETE]
    }
];

const data = [
    {
        name: 'Finance Budget',
        description: 'Finance Budget',
        type: 'DBU',
        period: 'MONTHLY',
        start: 'March 2022',
        end: 'June 2022',
        scope: 'Global',
        statusPercentage: 9,
        cost: '4648.58',
        budget: '50000',
        statusTitle: 'OK',
        statusDescription: 'Cost is projected to be within the budget when the period ends on 04/01/2022 00:00:00 UTC, with the forecasted cost 11085.1 DBUs.'
    },
    {
        name: 'Test Budget',
        description: 'Test Budget',
        type: 'DBU',
        period: 'MONTHLY',
        start: 'March 2022',
        end: 'June 2022',
        scope: 'Workspace 4730',
        statusPercentage: 712,
        cost: '1423.58',
        budget: '200',
        statusTitle: 'Exceeded',
        statusDescription: 'Cost has already exceeded the budget.'
    },
    {
        name: 'Analytics Budget',
        description: '',
        type: 'DBU',
        period: 'MONTHLY',
        start: 'February 2022',
        end: 'March 2022',
        scope: 'Global',
        statusPercentage: 93,
        cost: '4648.58',
        budget: '50000',
        statusTitle: 'At Risk',
        statusDescription: 'Cost is projected to be within the budget when the period ends on 04/01/2022 00:00:00 UTC, with the forecasted cost 11085.1 DBUs.'
    },
    {
        name: 'Budget 2',
        description: '',
        type: 'DBU',
        period: 'MONTHLY',
        start: 'February 2022',
        end: 'March 2022',
        scope: 'Global',
        statusPercentage: 60,
        cost: '4648.58',
        budget: '50000',
        statusTitle: 'OK',
        statusDescription: 'Cost is projected to be within the budget when the period ends on 04/01/2022 00:00:00 UTC, with the forecasted cost 11085.1 DBUs.'
    },
    {
        name: 'Budget 3',
        description: '',
        type: 'DBU',
        period: 'MONTHLY',
        start: 'February 2022',
        end: 'March 2022',
        scope: 'Global',
        statusPercentage: 81,
        cost: '4648.58',
        budget: '50000',
        statusTitle: 'At Risk',
        statusDescription: 'Cost is projected to be within the budget when the period ends on 04/01/2022 00:00:00 UTC, with the forecasted cost 11085.1 DBUs.'
    },
];

const transformDataToRows = (data, headers) => {
    return data.map((item) => {
        return headers.map((header) => {
            return {
                ...header,
                value: item[header.key],
                ...(header.key === tableHeaderTypes.STATUS && { render: () => { return <Status progress={item.statusPercentage} {...item} /> } })
            }
        });
    });
};

const deleteBudget = (id, budgetData, setBudgetData) => {
    const choice = window.confirm(`Do you want to delete record ${id}`);
    if (choice) {
        let updatedRows = [...budgetData];
        const foundBudgetIndex = updatedRows.findIndex((item) => item.name.toLowerCase() === id.toLowerCase());
        updatedRows.splice(foundBudgetIndex, 1);
        setBudgetData(updatedRows);
    }
}

export {
    headers,
    data,
    transformDataToRows,
    deleteBudget
};