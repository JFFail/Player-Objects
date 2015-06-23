//Main piece of code for testing.
//Define the requirements for my templates.
var Person = require('./person.js');
var Player = require('./player.js');

//Instantiate a new player.
Player.prototype = new Person();
var me = new Player("John", 15);

//Output basic information.
console.log("My name is " + me.name + ".");
console.log("My renown is currently " + me.renown + ".");

//Test the modifier for renown.
me.updateRenown(5);
console.log("Now my renown is: " + me.renown);
me.updateRenown(-10);
console.log("Now it's at: " + me.renown);

//Make another person.
var someone = new Person("Garrett", 5);

//Add my rapport for Garrett.
me.addRapport(someone, 1.25);
console.log("My rapport toward " + someone.name + " is " + me.rapportList[someone] + ".");

//Set my nobility.
me.calcNobility();
console.log("My nobility is: " + me.nobility);
console.log("My renown is: " + me.renown);
me.calcNobility();
console.log("After another bump, my nobility is: " + me.nobility);
console.log("And my renown is: " + me.renown);

//Set my infamy.
me.calcInfamy();
console.log("My infamy value is: " + me.infamy);
console.log("And my renown is: " + me.renown);
me.calcInfamy();
console.log("My infamy value is: " + me.infamy);
console.log("And my renown is: " + me.renown);