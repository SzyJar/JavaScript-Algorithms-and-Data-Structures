function convertToRoman(input) {
    let roman = [];
    let num = input;
    while(num > 0){
        if(num >= 1000){
          roman.push("M");
          num = num - 1000;
        } else if (num >= 900){
          roman.push("CM");
          num = num - 900;
        } else if (num >= 500){
          roman.push("D");
          num = num - 500;
        } else if (num >= 400){
          roman.push("CD");
          num = num - 400;
        } else if (num >= 100){
          roman.push("C");
          num = num - 100;
        } else if (num >= 90){
          roman.push("XC");
          num = num - 90;
        } else if (num >= 50){
          roman.push("L");
          num = num - 50;
        } else if (num >= 40){
          roman.push("XL");
          num = num - 40;
        } else if (num >= 10){
          roman.push("X");
          num = num - 10;
        } else if (num >= 9){
          roman.push("IX");
          num = num - 9;
        } else if (num >= 5){
          roman.push("V");
          num = num - 5;
        } else if (num >= 4){
          roman.push("IV");
          num = num - 4;
        } else if(num >= 1){
          roman.push("I");
          num = num - 1;
        }             
      }
   return roman.join("");
  }
  
  console.log(convertToRoman(36));