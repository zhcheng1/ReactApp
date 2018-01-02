import {CALCULATE_TOTAL} from "../actions/actionTypes";

const result = {
    iterizedBill: {},
    rules: [],
    total: 0,
    average: 0
};

export const calculateRules = function (peoplePaidMore, peoplePaidLess) {
    let rules = [];
    let moreCount = peoplePaidMore.length;
    let lessCount = peoplePaidLess.length;
    let moreInd = 0;
    let lessInd = 0;

    while(moreCount != 0 && lessCount != 0) {
        while(peoplePaidMore[moreInd].toPay == 0) {
            moreInd = (moreInd + 1) % peoplePaidMore.length;
        }

        while(peoplePaidLess[lessInd].toPay == 0) {
            lessInd = (lessInd + 1) % peoplePaidLess.length;
        }
        let temp = "";
        let amount = peoplePaidMore[moreInd].toPay + peoplePaidLess[lessInd].toPay;
        if(amount <= 0) {
            temp = `${peoplePaidLess[lessInd].name} should pay ${peoplePaidMore[moreInd].name} ${peoplePaidLess[lessInd].toPay}`;
            peoplePaidMore[moreInd].toPay = amount;
            peoplePaidLess[lessInd].toPay = 0;
            lessCount--;
            if(amount == 0) {
                moreCount--;
            }
        } else {
            temp = `${peoplePaidLess[lessInd].name} should pay ${peoplePaidMore[moreInd].name} ${-peoplePaidMore[moreInd].toPay}`;
            peoplePaidMore[moreInd].toPay = 0;
            peoplePaidLess[lessInd].toPay = amount;
            moreCount--;
        }

        lessInd = (lessInd + 1) % peoplePaidLess.length;
        moreInd = (moreInd + 1) % peoplePaidMore.length;
        rules.push(temp);
    }
    return rules;
};

function calculate(people, items) {
    let iterizedBill = result.iterizedBill;
    let total = 0;
    let peopleNum = 0;

    // loop through people
    for (const [key, value] of Object.entries(people)) {
        // get item list
        let itemList = people[key].items;
        let personTotal = 0;
        // loop through items list
        itemList.forEach((itemName, i) => {
            // get item from items
            let item = items[itemName];
            let tempTotal = item.quantity * item.unitPrice;
            personTotal += tempTotal;
        });
        total += personTotal;
        iterizedBill[key] = people[key];
        iterizedBill[key].paid = personTotal;
        iterizedBill[key].name = people[key].name;
        peopleNum++;
    }

    result.total = total;
    result.average = Math.round(total / peopleNum * 100) / 100;

    let peoplePaidMore = [];
    let peoplePaidLess = [];
    for(const [key, value] of Object.entries(iterizedBill)) {
        iterizedBill[key].toPay = result.average - iterizedBill[key].paid;
        if(iterizedBill[key].toPay < 0) {
            peoplePaidMore.push(iterizedBill[key]);
        }
        if(iterizedBill[key].toPay > 0) {
            peoplePaidLess.push(iterizedBill[key]);
        }
    }

    // increase
    peoplePaidMore.sort(function(a, b) {
        return b.toPay - a.toPay;
    });

    // decrease
    peoplePaidLess.sort(function(a, b) {
        return a.toPay - b.toPay;
    });

    result.rules = calculateRules(peoplePaidMore, peoplePaidLess);

    return result;
}

export const shareFareResultReducer = (state=result, actions)=>{
    switch (actions.type){
        case CALCULATE_TOTAL:
            calculate(actions.people, actions.items);
            return Object.assign({}, state, result);
        default:
            return state;
    }
};