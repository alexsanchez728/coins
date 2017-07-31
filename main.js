console.log("Im here");
// Output Coins
var quarterCoins;
var dimeCoins;
var nickelCoins;
var pennyCoins;
// declaring coin costs
var quarter = 0.25;
var dime = 0.10;
var nickel = 0.05;
var penny = 0.01;
// worth, to be used in the functions
var balanceLessQ;
var balanceLessD;
var balanceLessN;
var balanceLessP;

function coinCounter(startingAmount) {
  quarterCoins = Math.floor(startingAmount / quarter);

  if(quarterCoins >= 1) {
     var quarterWorth = quarterCoins * quarter;
     balanceLessQ = startingAmount - quarterWorth;
   } else {
      balanceLessQ = startingAmount;
   }

 dimeCoins = Math.floor(balanceLessQ/dime);
 if(dimeCoins >= 1) {
    var dimeWorth = dimeCoins * dime;
    balanceLessD = balanceLessQ - dimeWorth;
   } else {
      balanceLessD = balanceLessQ;
   }

 nickelCoins = Math.floor(balanceLessD/nickel);
 if(nickelCoins >= 1) {
  var nickelWorth = nickelCoins * nickel;
  balanceLessN = balanceLessD - nickelWorth;
 } else {
      balanceLessN = balanceLessD;
 }

 pennyCoins = Math.ceil(balanceLessN/penny);

}




coinCounter(1.67);

console.log("", quarterCoins, dimeCoins, nickelCoins, pennyCoins);
// console.log(dimeCoins);
// console.log(nickelCoins);
// console.log(pennyCoins);







