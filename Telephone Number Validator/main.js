function telephoneCheck(str) {
    // regular expresions
    let pass = 0;
    if(/\d\d\d-\d\d\d-\d\d\d\d/.test(str)){
      pass = 1
    }
    if(/\(\d\d\d\)\d\d\d-\d\d\d\d/.test(str)){
      pass = 1
    }
    if(/\(\d\d\d\) \d\d\d-\d\d\d\d/.test(str)){
      pass = 1
    }
    if(/\d\d\d \d\d\d \d\d\d\d/.test(str)){
      pass = 1
    }
    if(/\d\d\d\d\d\d\d\d\d\d/.test(str)){
      pass = 1
    }
    if(/\d \d\d\d \d\d\d \d\d\d\d/.test(str)){
      pass = 1
    }
    if(pass == 0){ return false };
  
    // array split
    let arr = str.split("");
    let newArr = []
  
    if(!(/[0-9]/.test(arr[0])) && !(/[\)]/.test(arr[4]))) { return false;}
  
    for(let i = 0; i< arr.length; i++){
      if(/[0-9]/.test(arr[i])){
        newArr.push(arr[i])
      }
    }
    if(newArr.length != 10 && newArr.length != 11){
      return false;
    }
      if(newArr.length == 11 && newArr[0] != 1){
      return false;
    }
    /////////////////
  
    return true;
  }
  
  console.log(telephoneCheck("555-555-5555"));
  console.log(telephoneCheck("1 555)555-5555"));