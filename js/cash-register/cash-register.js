function checkCashRegister(price, cash, cid) {
    var changeDue = cash - price;
    console.log(changeDue);
    var status = "";
    var change = [];
    var drawer = cid.map(arr => arr.slice());
    var valueLookup = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.10,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    }

    for (var i = drawer.length - 1; i >= 0; i--) {
        var changeName = drawer[i][0];
        var changeValue = valueLookup[changeName];

        // Use Math.floor to force integer division to calculate how much can be given
        // of a denomination then tender the lesser of the calculated amount and the amount in the drawer.
        var requestedChange = Math.floor(changeDue / changeValue) * changeValue;
        var changeGiven = Math.min(requestedChange, drawer[i][1]);

        // use Math.round to fix float precision errors by rounding to nearest cent when updating 
        // the changeDue and the change in the Drawer
        changeDue = Math.round((changeDue - changeGiven) * 100) / 100;
        drawer[i][1] = Math.round((drawer[i][1] - changeGiven) * 100) / 100;

        //Only include change array if any of a denomination is given.
        if (changeGiven > 0) {
            change.push([changeName, changeGiven]);
        }
    }
    console.log(change);

    if (changeDue > 0) { //If any change is still due, there are insufficient funds.
        status = "INSUFFICIENT_FUNDS";
        change = [];
    }
    else {
        // Check if the change drawer will be emptied by the transaction.
        var empty = true;
        for (var i = 0; i < drawer.length; i++) {
            if (drawer[i][1] != 0) {
                empty = false;
            }
        }
        if (empty) {
            status = "CLOSED";
            change = cid;
            console.log(cid);
        }
        else {
            status = "OPEN";
        }
    }


    // Here is your change, ma'am.
    var changeObj = { status: status, change: change }
    console.log(changeObj);
    return changeObj;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
