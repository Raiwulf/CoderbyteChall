function FirstReverse(str) { 
  
  var arr = Array.from(str)
  arr.reverse()
  str = arr.join("")
  return str; 
  
}

console.log(FirstReverse(readline()));
