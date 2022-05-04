class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  dance() {
    console.log(this.name, " is dancing");
  }
}

class AwesomePerson extends Person {
  dance() {
    super.dance();
    console.log("SO AWESOME!");
  }
}

const bran = new Person("Bran");
bran.dance();

const robb = new AwesomePerson("Robb");
robb.dance();
