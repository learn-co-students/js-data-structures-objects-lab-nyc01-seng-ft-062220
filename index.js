// Write your solution in this file!

const driver = {}
function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value})
    //why is key in brackjets? because we're assigning it?
    //ASNWER: BECAUSE it's a variable!!!!! can't use .notation with variable being passes in
 
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    // why does this not work?
    //return driver[key] = value
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, driver)
    delete newDriver[key]
    return newDriver
}


function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}