const getProgressType = (progress) => {
    let type = 'ok';
    if (progress > 100) type = 'danger'
    else if (progress > 80) type = 'warning'
    return type;
};

export {
    getProgressType
};