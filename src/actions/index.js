import * as actionType from "./actionTypes";

// define actions(type, payload)
// Counter
export const addCounter = () => ({type: actionType.ADD_COUNTER});

// ShareFare
export const addPerson = (name) => ({type: actionType.ADD_PERSON, name});
export const addFareItem = (item, personID) => ({type: actionType.ADD_FARE_ITEM, item, personID});
export const editFareItem = (item, personID) => ({type: actionType.EDIT_FARE_ITEM, item, personID});
export const removeFareItem = (itemID, personID) => ({type: actionType.REMOVE_FARE_ITEM, itemID, personID});
export const calculateTotal = (people, items) => ({type: actionType.CALCULATE_TOTAL, people, items});

