//Types

const isWinter: boolean = false;

const isNumber: number = 5;

const isName: string = "Randi";

const names: string[] = ["Randi", "Daniel"];

enum Starks {
  Jon,
  Bran,
  Eddard,
  Catlyn,
}

const cat: Starks = Starks.Catlyn;

function getName(): string {
  return "function return as string";
}

function setName(name: string): void {
  console.log("Hello ", name);
}

console.log(Starks);
console.log(getName());
setName("Randi Guarcas");
