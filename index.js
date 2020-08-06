// Write your solution in this file!
const driver = {}

const updateDriverWithKeyAndValue = (driver, key, value) => Object.assign({}, driver, {[key]: value})
    
const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    driver[key] = value
    return driver
}

const deleteFromDriverByKey = (driver, key) => {
    let newObjectWithoutKey = {...driver}
    delete newObjectWithoutKey[key]
    return newObjectWithoutKey
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[key]
    return driver
}

//console.log(updateDriverWithKeyAndValue(driver))