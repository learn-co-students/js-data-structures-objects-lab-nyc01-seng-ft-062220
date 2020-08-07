const driver = new Object();

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    // driver[key] = value;
    // return driver
    return Object.assign(driver, {[key]: value})
}

function deleteFromDriverByKey(driver, key) {
    // const newDriverObj = {...driver};
    // delete newDriverObj[key];
    // return newDriverObj;

    // alternatively, leveraging Object function(s)
    const newDriverObj = Object.assign({}, driver);
    delete newDriverObj[key];
    return newDriverObj;
   
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}