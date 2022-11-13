/*Formating*/
console.log(`Financial Analysis\n----------------------------`);

/*Total number of month*/
var entryAmount = finances.length;

console.log("Total Months: " + entryAmount);

/*The net total amount of Profit/Losses over the entire period*/
var total = 0

for(firstIndex = 0; firstIndex < finances.length; firstIndex++){
    total = total + (finances[firstIndex][1]);
};
console.log("Total: $" + total);

/*The average of the changes in Profit/Losses over the entire period*/
var profitChange = [];
var profitMonthly = [];

for (monthly = 0; monthly < finances.length; monthly++){
    profitMonthly[monthly] = (finances[monthly][1]);
};
for (change = 0; change < profitMonthly.length; change++){
    profitChange[change] = (profitMonthly[change] - profitMonthly[change - 1]);
};
profitChange.shift();

var totalChange = 0;

for(profitIndex = 0; profitIndex < profitChange.length; profitIndex++){
    totalChange = totalChange + (profitChange[profitIndex]);
};

var averageChange = totalChange / (entryAmount -1);

roundChange = Math.round(averageChange * 100) / 100
console.log("Average Change: " + "$" + roundChange);

/*The greatest increase in profits (date and amount) over the entire period.*/
profitchangeGreatest = Math.max(...profitChange);

var greatestId = 1 + profitChange.indexOf(profitchangeGreatest);

console.log("Greatest Increase in Profits: " + finances[greatestId][0] + " " + "$" + profitchangeGreatest);

/*The greatest decrease in losses (date and amount) over the entire period.*/
profitchangeLowest = Math.min(...profitChange);

var lowestId = 1 + profitChange.indexOf(profitchangeLowest);

console.log("Greatest Decrease in Profits: " + finances[lowestId][0] + " " + "$" + profitchangeLowest);
