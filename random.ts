// 
function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

// random array position
function randomCharFor(str: String) {
  var arr = str.split("");
  var output = [];
  while (arr.length > 0) {
    const randomNumber = randomInt(arr.length)
    const fraction = arr.slice(randomNumber, randomNumber + 1);
    // remove fraction from arr
    arr = arr.slice(0, randomNumber).concat(arr.slice(randomNumber + 1));
    // add fraction to output
    output = output.concat(fraction);
  }
  return output.join("")
}

for (var i = 0; i < 200; i++) {
  console.log(randomCharFor("rawinng"));
}
