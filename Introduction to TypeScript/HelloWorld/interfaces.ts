interface Stark {
  name: string;
  age?: number;
}

function printName(stark: Stark) {
  //Well, stark.age is undefined
  console.log(stark.age);
}

printName({ name: "Randi", age: 29 });
printName({ name: "Caroline" });
