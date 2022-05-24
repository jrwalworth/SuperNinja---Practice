class Ninja {
    constructor(uname, health) {
        this.uname = uname
        this.health = health
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log(`Ninja's name is ${this.uname}`)
        return this
    }
    showStats() {
        console.log(`---${this.uname}'s Stats---`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Health: ${this.health}`);
        console.log('----------');
        return this
    }
    drinkSake() {
        this.health += 10;
        return this
    }
}

class Sensei extends Ninja {
    constructor(uname) {
        super(uname)
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdowm = 10
    }
    speakWisdom(){
        console.log(`${this.uname}'s words of wisdom are: One must drink sake to become sake.`);
        this.drinkSake()
        return this
    }
}

const myNinja = new Ninja('Stealth', 10);

myNinja.sayName();
myNinja.showStats();

console.log('Stats after drinking Sake...')
myNinja.drinkSake().showStats();

// User super() to inherit into subclass
mySensei = new Sensei("Master Splinter");
mySensei.showStats();
mySensei.speakWisdom().showStats();