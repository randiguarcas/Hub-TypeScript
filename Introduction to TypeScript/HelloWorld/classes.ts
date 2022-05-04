class Stark {
  name: string = "Randi";
  static castle: string = "Winterfell";
  saying: string;

  constructor() {
    this.saying = Stark.castle;
  }

  hello(person: string) {
    console.log("Hello", person);
  }
}

const ned = new Stark();
ned.saying = "Winter is comming";
ned.hello("Daniel");

console.log(ned);
