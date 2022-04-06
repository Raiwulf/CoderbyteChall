function FirstReverse(str) { 
  var arr = Array.from(str)
  arr.reverse()
  str = arr.join("")
  // code goes here  
  return str; 

}
   
// keep this function call here 
console.log(FirstReverse(readline()));
