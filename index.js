/* 
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/

const numbs = [1, 2, 3, 4, 5];

function numbsSquared(numbs) {
    return numbs.map(num => num ** 2);
}

const squared = numbsSquared(numbs);
console.log(squared);

/* 
Challenge 2:
Given an array of strings, return an array where the first letter of each array is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]


function namesCapitalized(names) {
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}

const namesCap = namesCapitalized(names);
console.log(namesCap);

/*
Challenge 3:
Given an array of strings, return an array of string that wraps the original strings in an HTML-like <p></p> tag
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

function pokemonHTML(pokemon) {
    return pokemon.map(poke => "<p>" + poke + "</p>");
}

const pokem = pokemonHTML(pokemon);
console.log(pokem);