const square = function(number) {
  return number*number;
}

const cube = function(number) {
  return number*number*number;
}

const isEven = function(number) {
  if(number%2 == 0){
    return ("Even");
  }else{
    return ("Odd");
  }
}

const isPrime = function(number) {
  let factor=2;
  let primeCount=0;
  while(factor<number) {
    if(number%factor == 0) {
      return("Composite");
    }
    factor++;
  }
  return("prime");
}

const factorial = function(number) {
  let fact = 1;
  for(let i=1;i<=number;i++){
    fact = fact*i;
  }
  return(fact);
}

exports.square=square;
exports.cube=cube;
exports.isEven=isEven;
exports.isPrime=isPrime;
exports.factorial=factorial;
