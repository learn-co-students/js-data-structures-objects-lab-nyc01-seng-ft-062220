// Write your solution in this file!
function updateDriverWithKeyAndValue(driverObj, key, value){
  return Object.assign({}, driverObj, { [key]: value});
};


function destructivelyUpdateDriverWithKeyAndValue(driverObj, key, value){
  return Object.assign(driverObj, { [key]: value});
};

function deleteFromDriverByKey(driver, key) {
  const newObject = Object.assign({}, driver);
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}

const driver = {}
