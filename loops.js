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
function doWhileLoop(num) {
  i = 
  function incrementVariable() {
   let i = i + 1; i === 0; i < 10;
  }
  do {
   console.log("I run once regardless.");
  } while (incrementVariable() < num)
  return num
}