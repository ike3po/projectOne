/**
 * Created by Isaac on 9/23/2016.
 */
/**
*   @author Thrasher, Isaac ()
*   @version 0.0.3
*   @summary Project 1 || created: 09.22.2016
*   @todo
*/

"use strict";
const PROMPT = require('readline-sync');

let numBedRoom;
let numBath;
let numCar;
let lotNum;
let end;
let total;

function main() {
    lotNumber();
    bedroomNumber();
    bathroomNumber();
    numberOfCars();
    totalPrice();
    endOfProgram();
    
    
}

main();

function bedroomNumber() {
    numBedRoom = PROMPT.question('\n How many bedrooms do you want the house to have? ');
}

function bathroomNumber() {
    numBath = PROMPT.question('\n How many bathrooms do you want the house to have? ');
}

function numberOfCars() {
    numCar = PROMPT.question('\n How many car do you want to fit in the the garage? ');
}

function lotNumber() {
    lotNum = PROMPT.question('\n Please enter the lot number. ');
}

function totalPrice() {
    console.log('\n Total cost of the house will be: ')
    console.log((numBedRoom*17000)+(numBath*12500)+(numCar*6000)+50000+' dollars');
}

function endOfProgram() {
    end = ('\n End of Job. ');
    console.log(end);
}