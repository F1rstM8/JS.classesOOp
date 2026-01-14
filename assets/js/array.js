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
