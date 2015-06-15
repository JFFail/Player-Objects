//Basic template for creating a person. Will serve for NPCs and be inherited for PCs.
module.exports = function Person(name, renown) {
    //Define two base attributes all users will have.
    this.name = name;
    this.renown = renown;
    this.rapportList = new Object();

    //Mechanism to update the renown value.
    this.updateRenown = function(modifier) {
        this.renown += modifier;
    };

    //Mechanism to add someone to rapport list.
    this.addRapport = function(person, modifier) {
        this.rapportList[person] = person.renown * modifier;
    };
};
