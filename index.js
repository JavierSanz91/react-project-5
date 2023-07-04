/* 
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/

const numbs = [1, 2, 3, 4, 5];

function numbsSquared(numbs) {
    return numbs.map(num => num ** 2);
}

console.log(numbsSquared(numbs));

/* 
Challenge 2:
Given an array of strings, return an array where the first letter of each array is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]

function nameCapitalized(name) {
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}

console.log(nameCapitalized(names));