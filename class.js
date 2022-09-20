class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}


let user = new User("john");
user.sayHi();

class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  }
  
  let animal = new Animal("My animal");
  animal.run(500);
  animal.stop();
