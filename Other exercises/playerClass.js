class Player{
    constructor(name, country){
        this.name = name;
        this.country = country;
    }
    origin() {
        console.log(`${this.name} was born in ${this.country}`);
    }

}

class BasketballPlayer extends Player{
    constructor(name, country, age){
        super(name, country);
        this.age = age;
    }
    player(){
        console.log(`${this.name} is ${this.age} years old and knows how to play basketball`);
    }
}
let player1 = new Player("John", "Philippines")
let player2 = new BasketballPlayer("Lebron", "USA", 34);
player1.origin();
player2.player();
player2.origin();