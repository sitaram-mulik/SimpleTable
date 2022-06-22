const actionTypes = {
    EDIT: 'Edit',
    DELETE: 'Delete',
    TRENDS: 'Trends',
    CHARGEBACK: 'Chargeback',
    OPTIMIZE: 'Optimize'
};

const divideButtons = (buttons) => {
    const simpleButtons = [];
    const iconButtons = [];
    buttons.forEach((btn) => {
        if (btn === actionTypes.EDIT || btn === actionTypes.DELETE) {
            iconButtons.push(btn);
        } else {
            simpleButtons.push(btn);
        }
    });
    return {
        simpleButtons,
        iconButtons
    }
}

export {
    actionTypes,
    divideButtons
};