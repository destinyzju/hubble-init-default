var result = nvm.call(smartContract, "save", "[1]");
console.log("call:", result);

var balance = nvm.call(smartContract, "balanceOf", "[1]");
console.log("balance:", balance.toString());
