function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

console.log(getRandomInt(6));


//test

console.log(getRandomInt(7)>7)  //returns false

console.log(getRandomInt(9)>7)  //returns true


// if (getRandomInt(7)>0) {      //returns test failed

//   throw new Error("Test failed");
//  }


