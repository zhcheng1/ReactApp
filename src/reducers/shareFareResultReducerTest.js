import { calculateRules } from "./shareFareResultReducer";

let peoplePaidMore = [
    {
        name: "person0",
        toPay: -4
    },
    {
        name: "person1",
        toPay: -2
    }
];
let peoplePaidLess = [
    {
        name: "person2",
        toPay: 3
    },
    {
        name: "person3",
        toPay: 3
    }
];

console.log(calculateRules(peoplePaidMore, peoplePaidLess));