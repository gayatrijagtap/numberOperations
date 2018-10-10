let lib=require("../library/allOperationLib.js");

const main=function() {
  let number=+process.argv[2];
  console.log("number:",number);
  console.log("square:",lib.square(number));
  console.log("cube:",lib.cube(number));
  console.log("isEven:",lib.isEven(number));
  console.log("isPrime:",lib.isPrime(number));
  console.log("factorial:",lib.factorial(number));
}

main();
