var XrData_GameActorLevelUp = Game_Actor.prototype.levelUp;
Game_Actor.prototype.levelUp = function() {
    if (XrData_GameActorLevelUp.call(this) || this.recoverAll()){}
};