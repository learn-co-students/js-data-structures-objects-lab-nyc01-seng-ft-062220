function updateDriverWithKeyAndValue(driverObj, key, value){
    return Object.assign({}, driverObj, { [key]: value});
};


function destructivelyUpdateDriverWithKeyAndValue(driverObj, key, value){
    return Object.assign(driverObj, { [key]: value});
};

function deleteFromDriverByKey(driverObj, key){
    const newObj = Object.assign({}, driverObj);
    delete newObj[key]
    return newObj
};

function destructivelyDeleteFromDriverByKey(driverObj, key){
    delete driverObj[key]
    return driverObj
};

const driver = {}