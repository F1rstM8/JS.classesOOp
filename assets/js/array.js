class Animal {
  constructor(name) {
    this.name = name;
  }

  hunting() {
    console.log(`${this.name} (Animal): Зараз дожену здобич!`);
  }

  growl() {
    console.log(`${this.name} (Animal): Гррррр!`);
  }
}

class Tiger extends Animal {
  hunting() {
    console.log(
      `${this.name} (Tiger): Я підкрадаюся тихо і роблю смертельний стрибок!`
    );
  }
  growl() {
    console.log(`${this.name} (Tiger): РРР-МЯУ! Тигр з'їсть тебе!`);
  }
}
class Wolf extends Animal {
  hunting() {
    console.log(`${this.name} (Wolf): Ми зграєю заганяємо оленя!`);
  }

  growl() {
    console.log(`${this.name} (Wolf): Аууууу! (Виття на місяць)`);
  }
}

const tiger1 = new Tiger("Шерхан");
const wolf1 = new Wolf("Ракша");

const genericAnimal = new Animal("Невідома істота");

console.log("--- Тест Тигра ---");
tiger1.hunting();
tiger1.growl();

console.log("\n--- Тест Вовка ---");
wolf1.hunting();
wolf1.growl();

console.log("\n--- Тест Батьківського класу ---");
genericAnimal.hunting();
genericAnimal.growl();
