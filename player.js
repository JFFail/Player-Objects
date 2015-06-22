//Template for the PC(s).
module.exports = function Player(name, renown) {
    this.name = name;
    this.renown = renown;
    this.nobility = 1;
    this.nobilityCount = 0;
    this.infamy = 1;
    this.infamyCount = 0;
    //Streak will be positive for noble deeds and negative for infamous ones.
    this.streakCount = 0;
    
    //Function to determine current nobility.
    this.calcNobility = function() {
      //First increment my nobility counter.
      this.nobilityCount++;
      
      //See what the current streak is.
      if(this.streakCount > 0) {
          this.streakCount++;
      } else {
          //Reset it to 1 since they've done a good deed.
          this.streakCount = 1;
      }
      
      //Recalculate nobility. It scales the more noble you are.
      if(this.nobility < 15) {
          this.nobility = this.nobility + (.1 * this.nobilityCount);
      } else if(this.nobility >= 15 && this.nobility < 30) {
          this.nobility = this.nobility + (.3 * this.nobilityCount);
      } else {
          this.nobility = this.nobility + (.5 * this.nobilityCount);
      }
      
      //To start the streak impacts outside the formula.
      this.modifyWithStreak();
      
      //Recalculate the new renown.
      this.calcRenown();
    };
    
    //Function to determine current infamy.
    this.calcInfamy = function() {
      //First increment my infamy counter.
      this.infamyCount++;
      
      //See what the current streak is.
      if(this.streakCount < 0) {
          this.streakCount--;
      } else {
          this.streakCount = -1;
      }
      
      //Recalculate infamy. It scales the more infamous you are.
      if(this.infamy < 15) {
          this.infamy = this.infamy + (.1 * this.infamyCount);
      } else if(this.infamy >= 15 && this.infamy < 30) {
          this.infamy = this.infamy + (.3 * this.infamyCount);
      } else {
          this.infamy = this.infamy + (.5 * this.infamyCount);
      }
      
      this.modifyWithStreak();
      
      //Recalculate renown.
      this.calcRenown();
    };
    
    //Calculate renown based on current infamy/nobility values.
    this.calcRenown = function() {
      this.renown = (this.nobility * this.nobilityCount) - (this.infamy * this.infamyCount);  
    };
    
    this.modifyWithStreak = function() {
      if(this.streakCount > 0) {
          this.nobility = this.nobility + (this.nobility * (this.streakCount * 0.05));
      } else {
          this.infamy = this.infamy +  (this.infamy * (this.streakCount * 0.05));
      }
    };
};
