function getRandomInt6(max) {
const randomNumber=Math.floor(Math.random() * max) + 1;
document.getElementById("demo6").innerText= randomNumber;
  return randomNumber
}

function getRandomInt10(max) {
const randomNumber=Math.floor(Math.random() * max) + 1;
document.getElementById("demo10").innerText= randomNumber;
  return randomNumber
}

// console.log(getRandomInt(6));

//test

//console.log(getRandomInt(7)>7)  //returns false

//console.log(getRandomInt(9)>7)  //returns true


// if (getRandomInt6(6)>0) {      //returns test pass

//   throw new Error("Test failed");
//  }

// if (getRandomInt6(6)>6) {      //returns test failed

//   throw new Error("Test failed");
//  }

