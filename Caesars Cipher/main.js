function rot13(str) {
    let arr = str.split("");
    let [max, min] = [90, 65]
    let value = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i].charCodeAt() >= min && arr[i].charCodeAt() <= max){
        value = arr[i].charCodeAt() + 13;
        if(arr[i].charCodeAt() + 13 > max){
          value = min + (arr[i].charCodeAt() + 12 - max)
        }
        arr[i] = String.fromCharCode(value)
      }
    }
    return arr.join("");
  }
  
  console.log(rot13("SERR PBQR PNZC"));
  console.log(rot13("SERR CVMMN!"));