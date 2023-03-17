function checkCashRegister(price, cash, cid) {
    const unit = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    let startCid = [];
    for(let i = 0; i < cid.length; i++){
      startCid.push([])
      for(let j = 0; j < cid[0].length; j++){
        startCid[i].push(cid[i][j])   
      }
    }
  
    let change = [];
    let changeValue = 0;
    for(let i = (unit.length - 1); i >= 0;){
      if(price < cash){
        if((cash - price) >= unit[i] && cid[i][1] >= unit[i]){
          cash = cash - unit[i];
          cid[i][1] = cid[i][1] - unit[i];
          changeValue = changeValue + unit[i];
          } 
          if(!((cash - price) >= unit[i] && cid[i][1] >= unit[i])) {
            if(changeValue > 0) { change.push([cid[i][0], changeValue]) }
            changeValue = 0;
            i--;
            }
      }
      if(price == cash.toFixed(2)){ return {status: "OPEN", change: change} }
    }
  
    if(startCid[0][1].toFixed(2) != change[0][1].toFixed(2)){
      return {status: "CLOSED", change: startCid};
      }
  
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));