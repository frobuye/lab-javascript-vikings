// Soldier

class Soldier {
    constructor(health, strengh){
    this.health = health,
    this.strengh = strengh,
}

attack(){
    return this.strengh;
}

receiveDamage(damage){
    this.health -= damage;
}


// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
