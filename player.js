//Template for the PC(s).
module.exports = function Player(name, renown) {
    this.name = name;
    this.renown = renown;
    this.nobility = 1;
    this.nobilityCount = 0;
    this.infamy = 1;
    this.infamyCount = 0;
    
    //Function to determine current nobility.
    this.calcNobility = function() {
      //First increment my nobility counter.
      this.nobilityCount++;
      
      //Recalculate nobility. It scales the more noble you are.
      if(this.nobility < 15) {
          this.nobility = this.nobility + (.1 * this.nobilityCount);
      } else if(this.nobility >= 15 && this.nobility < 30) {
          this.nobility = this.nobility + (.3 * this.nobilityCount);
      } else {
          this.nobility = this.nobility + (.5 * this.nobilityCount);
      }
      
      //Recalculate the new renown.
      this.calcRenown();
    };
    
    //Function to determine current infamy.
    this.calcInfamy = function() {
      //First increment my infamy counter.
      this.infamyCount++;
      
      //Recalculate infamy. It scales the more infamous you are.
      if(this.infamy < 15) {
          this.infamy = this.infamy + (.1 * this.infamyCount);
      } else if(this.infamy >= 15 && this.infamy < 30) {
          this.infamy = this.infamy + (.3 * this.infamyCount);
      } else {
          this.infamy = this.infamy + (.5 * this.infamyCount);
      }
      
      //Recalculate renown.
      this.calcRenown();
    };
    
    //Calculate renown based on current infamy/nobility values.
    this.calcRenown = function() {
      this.renown = (this.nobility * this.nobilityCount) - (this.infamy * this.infamyCount);  
    };
};
