/// <reference types="cypress" />
const { describe } = require("mocha");
//let {square, sum} = require("./cypress/support/math.js") //This does not work.

/*
let getsquare  = require("/cypress/support/math.js");
let getsum  = require("/cypress/support/math.js");
*/
let testFirstName = require("/cypress/support/strings.js");
let {square, sum} = require("/cypress/support/math.js");
//In such declaration, the variables names specified above must match with the names in the math.js file.
describe("Test suite",function(){
    it("Square of the number",function(){
        cy.log(square(90));
        cy.log(sum(25,67));

        /*
        cy.log(getsquare.square(90));
        cy.log(getsum.sum(25,67));*/
    });

    it("Display Name",function(){
        cy.log(testFirstName.stringsFirstName)
    })
})