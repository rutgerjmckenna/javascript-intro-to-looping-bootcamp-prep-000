function forLoop(array) {
  for (let i = 0; i < 25; i++){
    if (i === 1) {
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}
function whileLoop(n) {
  while (n > 0){
    console.log(100)
      n--
  }
  return 'done'
}

// dwayne.harmon@gmail.com

function doWhileLoop(num) {
  
  i = 0
  var hi = 'hello'
  function incrementVariable() {
   i++
  }
  do {
   console.log("I run once regardless.");
  } while (incrementVariable() < num)
  return num
}