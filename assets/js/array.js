console.log("--- ЗАВДАННЯ 1 ---");
class User {
  constructor(id, firstName, lastName, address) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }
}

class Book {
  constructor(author, title, year, totalPages, shelfNumber) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.totalPages = totalPages;
    this.shelfNumber = shelfNumber;
    this.borrowerId = null;
  }

  isVacant() {
    return this.shelfNumber !== null;
  }

  getRent(userId) {
    if (this.isVacant()) {
      this.shelfNumber = null;
      this.borrowerId = userId;
      console.log(`Успіх: Книгу "${this.title}" видано юзеру з ID ${userId}.`);
    } else {
      console.log(
        `Помилка: Книга "${this.title}" зараз зайнята (у юзера ID ${this.borrowerId}).`
      );
    }
  }
}

const user1 = new User(10, "Олена", "Коваленко", "Київ, вул. Франка 5");
const user2 = new User(25, "Андрій", "Шевченко", "Львів, пл. Ринок 1");

console.log("--- ЗАВДАННЯ 2 ---");
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
