// Write your solution in this file!
const driver = {name: 'Jo', city: 'Washington', age: 29, status: 'sleepy'};

function updateDriverWithKeyAndValue(driver, key, value){
    return {...driver, ...{[key]: value} };
}

//console.log(updateDriverWithKeyAndValue(driver, 'city', 'NY'));


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

//console.log(destructivelyUpdateDriverWithKeyAndValue(driver, 'city', 'LA'));

function deleteFromDriverByKey(driver, key){
    const newObj = Object.assign({}, driver);
    console.log(newObj)
    delete newObj[key];
    return newObj;
}
console.log(deleteFromDriverByKey({name: 'Jo', city: 'Wash', age: 29}, 'city'));

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
}