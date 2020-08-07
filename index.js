let driver={name: "Mike"}


function updateDriverWithKeyAndValue(obj, key, value){
    let newDriver = {...obj};
    newDriver[key]=value; 
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
   obj[key] = value; 
   return obj
}


 function deleteFromDriverByKey(obj, key) {
  let newDriver1 = {...obj};
  delete newDriver1[key];
  return newDriver1
 }

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];
  return obj
}
