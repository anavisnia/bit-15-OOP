class Bird {
    constructor(name, color) {
        this.name = name;
        this.color = color || 'vienspalvis';
        this.voice = 'Macaw chip';
        this.canFly = true;
        this.wingsCount = 2;
    }

    introduce() {
        console.log(`Labas, as esu ${this.name} ir mano spalva yra ${this.color}.`);
    }

    sound() {
        console.log(`${this.name}: ${this.voice}.`);
    }

    fly() {
        console.log(`${this.name}: ${this.canFly ? 'Flies sway' : 'Oops...I can not fly :('}`);
    }
}

export { Bird }