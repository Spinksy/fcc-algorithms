module.exports.sym = sym;

function sym() {
  var input = [];

  //Convert default argument object to array
  for (var i = 0; i < arguments.length; i++) {
    input.push(arguments[i]);
  }

  return input.reduce(findSymDiff);
}

function findSymDiff(accumulator, current) {
  
  var symDiff = [];

  accumulator.forEach(function (x) {
    if (current.indexOf(x) < 0 && symDiff.indexOf(x) < 0) {
      symDiff.push(x);
    }
  });

  current.forEach(function (x) {
    if (accumulator.indexOf(x) < 0 && symDiff.indexOf(x) < 0) {
      symDiff.push(x);
    }
  });

  return symDiff.sort();
}