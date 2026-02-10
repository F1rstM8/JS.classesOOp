console.log(`--Exercice 1--`);
class User {
  constructor(id, firstName, lastName, address) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }
}

class Book {
  constructor(author, title, year, pages, shelfNumber) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.pages = pages;

    this.shelfNumber = shelfNumber;
    this.userId = null;
  }

  isVacant() {
    return this.shelfNumber !== null && this.userId === null;
  }
  getRent(userId) {
    if (this.isVacant()) {
      this.shelfNumber = null;
      this.userId = userId;
      console.log(
        `Успіх: Книгу "${this.title}" видано користувачу з ID ${userId}.`,
      );
    } else {
      console.log(`Помилка: Книга "${this.title}" наразі недоступна.`);
    }
  }
  returnBook(shelfNumber) {
    this.userId = null;
    this.shelfNumber = shelfNumber;
    console.log(`Книгу "${this.title}" повернуто на полицю №${shelfNumber}.`);
  }
}
const reader = new User(101, "Тарас", "Шевченко", "Київ, вул. Прорізна, 2");
const myBook = new Book("Джордж Орвелл", "1984", 1949, 328, 5);
console.log(`Чи доступна книга? -> ${myBook.isVacant()}`);
myBook.getRent(reader.id);
console.log(`Чи доступна книга? -> ${myBook.isVacant()}`);
console.log(myBook);
myBook.getRent(999);

console.log(`---Exercice2---`);

class Animal {
  constructor(name) {
    if (new.target === Animal) {
      throw new Error(
        "Неможливо створити екземпляр абстрактного класу Animal!",
      );
    }
    this.name = name;
  }
  hunting() {
    console.log(`${this.name}: Зараз дожену здобич...`);
  }
  growl() {
    console.log(`${this.name}: Гррррр!`);
  }
}
class Tiger extends Animal {
  hunting() {
    console.log(` ${this.name} (Тигр) тихо підкрадається і робить стрибок!`);
  }

  growl() {
    console.log(` ${this.name} (Тигр): РРРР-МЯУ! Я тебе з'їм!`);
  }
}
class Wolf extends Animal {
  hunting() {
    console.log(`${this.name} (Вовк) заганяє здобич зграєю!`);
  }

  growl() {
    console.log(`${this.name} (Вовк): Аууууу!`);
  }
}

try {
  const sherkhan = new Tiger("Шерхан");
  sherkhan.hunting();
  sherkhan.growl();
  console.log("---");
  const akela = new Wolf("Акела");
  akela.hunting();
  akela.growl();
  console.log("---");
} catch (e) {
  console.error(e.message);
}
