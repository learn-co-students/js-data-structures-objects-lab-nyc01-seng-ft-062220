// Write your solution in this file!
const driver = {}
function updateDriverWithKeyAndValue(driver,key,value){
    const newDriver = Object.assign({},driver)
    newDriver[key] = value
    return newDriver

}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
    driver[key] = value
    return driver 
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}

function deleteFromDriverByKey(driver,key){

    let object = Object.assign({},driver)
       delete object[key]
       return object
}