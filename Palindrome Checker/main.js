function palindrome(str) {
    let arr = str.toLowerCase().split("");
    let newArr = [];
    for(let i = 0; i<arr.length; i++){
      if(/[a-z0-9]/.test(arr[i])){
        newArr.push(arr[i])
      }
    }
    for(let i = 0; i<(newArr.length)/2; i++){
      console.log(newArr[i],newArr[newArr.length - i - 1])
      if(newArr[i] != newArr[newArr.length - i - 1]){
        return false;
      }
    }
    return true;
  }
  
  console.log(palindrome("eye"));
  console.log(palindrome("1 eye for of 1 eye."));