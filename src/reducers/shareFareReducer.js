import {ADD_PERSON, ADD_FARE_ITEM, EDIT_FARE_ITEM, REMOVE_FARE_ITEM} from "../actions/actionTypes";
class Person {
    constructor(id, name, items) {
        this.id = id;
        this.name = name;
        this.items = items;
    }

    getTotalPaid() {
        let total = 0;
        this.items.forEach((e,i) => {
            total += e.quantity * e.unitPrice;
        });
        return total;
    }
}

class Item {
    constructor(id, item, quantity, unitPrice) {
        this.id = id;
        this.item = item;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    }
}

const fakeData = {
    totalSpend: 17,
    average: 17,
    people: {
        'person0': new Person("person0", "A", [])
    },
    peopleCount: 0,
    items: {},
    itemsCount: 0

};

function peopleFareReducer (state, actions, currCount) {
    switch (actions.type){
        case ADD_PERSON:
            let personID = "person" + currCount;
            return {
                ...state,
                [personID] : new Person(personID, actions.name, []),
            };
        case ADD_FARE_ITEM:
            // state = people
            let person = state[actions.personID];
            person.items = person.items.length == 0 ? ["item" + currCount]: person.items.concat("item" + currCount);
            return {
                ...state,
                [actions.personID] : new Person(person.id, person.name,person.items),
            };
        default:
            return state;
    }
};

function itemsReducer (state, actions, currCount) {
    let action = actions.item;
    let currItem = {};
    switch (actions.type) {
        case ADD_FARE_ITEM:
            action = actions.item;
            currItem = new Item("item" + currCount, action.item, action.quantity, action.unitPrice);
            return {
                ...state,
                [currItem.id]: currItem
            };
        case EDIT_FARE_ITEM:
            action = actions.item;
            currItem = {...action};
            return {
                ...state,
                [currItem.id]: currItem
            };
        case REMOVE_FARE_ITEM:
            action = actions.item;
            const newState = state;
            //delete newState[action.id];
            return Object.assign({}, state, newState);
        default:
            return state;
    }
};

export const shareFareReducer = (state = fakeData, actions)=>{
    let currCount = 0;
    let itemId = "";
    switch (actions.type){
        case ADD_PERSON:
            currCount = state.peopleCount + 1;
            return Object.assign({}, state, {
                people: peopleFareReducer(state.people, actions, currCount),
                peopleCount: currCount
            });
        case ADD_FARE_ITEM:
            currCount = state.itemsCount + 1;
            // newItem, personID
            return Object.assign({}, state, {
                items: itemsReducer(state.items, actions, currCount),
                people: peopleFareReducer(state.people, actions, currCount),
                itemsCount: currCount
            });
        case EDIT_FARE_ITEM:
            return Object.assign({}, state, {
                items: itemsReducer(state.items, actions)
            });
        case REMOVE_FARE_ITEM:
            return Object.assign({}, state, {
                items: itemsReducer(state.items, actions)
            });
        default:
            return state;
    }
};