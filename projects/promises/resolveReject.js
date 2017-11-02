// Resolve, Reject

// Write a promise that adds two numbers and resolves the answer. However, if the two inputs provided are not both numbers reject the promise. The API should work like the following:


function addNumbers (x,y) {
  var promise = new Promise(function (resolve, reject) {
    try {
      var sum = x + y;
      resolve(sum);
    } catch (error) {
      reject(error);
    }
  });

  return promise;
}


var a = function(x,y){
  addNumbers(x,y).then(function (sum) {
      console.log(sum);
    })
    .catch(function (error) {
      console.log(error);
    });
}

a(10,4);
