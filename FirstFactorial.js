function FirstFactorial(num) { 
  
for(var i=(num-1);i>1;i--){
  num=num*i
}
  return num; 
}

console.log(FirstFactorial(readline()));
