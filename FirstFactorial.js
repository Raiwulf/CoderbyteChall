function FirstFactorial(num) { 
for(var i=(num-1);i>1;i--){
  num=num*i
}
  // code goes here  
  return num; 
}
   
// keep this function call here 
console.log(FirstFactorial(readline()));
