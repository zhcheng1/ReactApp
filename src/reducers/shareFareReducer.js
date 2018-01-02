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
    people: {
        'person0': new Person("person0", "A", ["item0"]),
        'person1': new Person("person1", "B", ["item1"]),
        'person2': new Person("person2", "C", ["item2"]),
        'person3': new Person("person3", "D", ["item3"]),
    },
    peopleCount: 4,
    items: {
        "item0": {
        id: "item0",
        item: "water",
        quantity: 1,
        unitPrice: 10
    },
        "item1": {
            id: "item1",
            item: "water",
            quantity: 2,
            unitPrice: 50
        },
        "item2": {
            id: "item2",
            item: "water",
            quantity: 1,
            unitPrice: 30
        },
        "item3": {
            id: "item3",
            item: "water",
            quantity: 2,
            unitPrice: 5
        },
    },
    itemsCount: 4,
    result: {}

};

function peopleFareReducer (state, actions, currCount) {
    let personID = "";
    switch (actions.type){
        case ADD_PERSON:
            personID = "person" + currCount;
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
        case REMOVE_FARE_ITEM:
            // state: people
            // actions:itemID, personID
            personID = actions.personID;
            function removeItem(array, filterCondition) {
                return array.filter( (item, index) => item !== filterCondition);
            }
            return {
                ...state,
                [personID] : {
                    ...state[personID],
                    items: removeItem(state[personID].items, actions.itemID)
                }
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
            // state: all data
            // actions:itemID, personID
            return  Object.keys(state).reduce((result = {}, key) => {
                        if (key != actions.itemID) {
                            result[key] = state[key];
                        }
                        return result;
                    }, {});

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
            // newItem, personID
            return Object.assign({}, state, {
                items: itemsReducer(state.items, actions),
                people: peopleFareReducer(state.people, actions)
            });
        default:
            return state;
    }
};