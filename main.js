// Output Coins
var quarterCoins;
var dimeCoins;
var nickelCoins;
var pennyCoins;
// worth, to be used in the functions
var balanceLessQ;
var balanceLessD;
var balanceLessN;
var balanceLessP;

function coinCounter(startingAmount) {
  quarterCoins = Math.floor(startingAmount / 0.25 );

  if(quarterCoins >= 1) {
     var quarterWorth = quarterCoins * 0.25;
     balanceLessQ = startingAmount - quarterWorth;
   } else {
      balanceLessQ = startingAmount;
   }

 dimeCoins = Math.floor(balanceLessQ/ 0.10);
 if(dimeCoins >= 1) {
    var dimeWorth = dimeCoins * 0.10;
    balanceLessD = balanceLessQ - dimeWorth;
   } else {
      balanceLessD = balanceLessQ;
   }

 nickelCoins = Math.floor(balanceLessD/ 0.05);
 if(nickelCoins >= 1) {
  var nickelWorth = nickelCoins * 0.05;
  balanceLessN = balanceLessD - nickelWorth;
 } else {
      balanceLessN = balanceLessD;
 }
 
 pennyCoins = Math.ceil(balanceLessN/0.01);
}

coinCounter(1.67);
console.log("Example amount=", "1.67", "Quarters =", quarterCoins, "Dimes =", dimeCoins, "Nickels =",nickelCoins, "Pennies =",pennyCoins);

coinCounter(10.43);
console.log("Example amount=", "10.43", "Quarters =", quarterCoins, "Dimes =", dimeCoins, "Nickels =",nickelCoins, "Pennies =",pennyCoins);

coinCounter(50.33);
console.log("Example amount=", "50.33", "Quarters =", quarterCoins, "Dimes =", dimeCoins, "Nickels =",nickelCoins, "Pennies =",pennyCoins);

coinCounter(99.50);
console.log("Example amount=", "99.50", "Quarters =", quarterCoins, "Dimes =", dimeCoins, "Nickels =",nickelCoins, "Pennies =",pennyCoins);
