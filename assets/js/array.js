console.log(`--Exercice1--`);
class User {
  #id;
  #firstName;
  #lastName;
  #address;

  constructor(id, firstName, lastName, address) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }
  get id() {
    return this.#id;
  }
  set id(value) {
    if (!value || (typeof value !== "string" && typeof value !== "number")) {
      throw new TypeError(
        "Помилка: ID юзера має бути непорожнім рядком або числом.",
      );
    }
    this.#id = value;
  }
  get firstName() {
    return this.#firstName;
  }
  set firstName(value) {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new TypeError("Помилка: Ім'я має бути непорожнім рядком.");
    }
    this.#firstName = value.trim();
  }
  get lastName() {
    return this.#lastName;
  }

  set lastName(value) {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new TypeError("Помилка: Прізвище має бути непорожнім рядком.");
    }
    this.#lastName = value.trim();
  }
  get address() {
    return this.#address;
  }

  set address(value) {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new TypeError("Помилка: Адреса має бути непорожнім рядком.");
    }
    this.#address = value.trim();
  }
}
class Book {
  #author;
  #title;
  #year;
  #pages;
  #shelfNumber;
  #userId;

  constructor(author, title, year, pages, shelfNumber) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.pages = pages;
    this.shelfNumber = shelfNumber;
    this.#userId = null;
  }

  get author() {
    return this.#author;
  }
  set author(value) {
    if (typeof value !== "string" || value.trim().length === 0)
      throw new TypeError("Автор має бути рядком.");
    this.#author = value.trim();
  }
  get title() {
    return this.#title;
  }
  set title(value) {
    if (typeof value !== "string" || value.trim().length === 0)
      throw new TypeError("Назва має бути рядком.");
    this.#title = value.trim();
  }
  get year() {
    return this.#year;
  }
  set year(value) {
    const currentYear = new Date().getFullYear();
    if (!Number.isInteger(value) || value < 0 || value > currentYear) {
      throw new RangeError(
        `Рік видання має бути коректним числом (не більше ${currentYear}).`,
      );
    }
    this.#year = value;
  }
  get pages() {
    return this.#pages;
  }
  set pages(value) {
    if (!Number.isInteger(value) || value <= 0) {
      throw new RangeError("Кількість сторінок має бути додатним числом.");
    }
    this.#pages = value;
  }
  get shelfNumber() {
    return this.#shelfNumber;
  }
  set shelfNumber(value) {
    if (value !== null && (!Number.isInteger(value) || value < 0)) {
      throw new RangeError("Номер полиці має бути додатним числом або null.");
    }
    this.#shelfNumber = value;
  }
  get userId() {
    return this.#userId;
  }
  isVacant() {
    return this.#shelfNumber !== null && this.#userId === null;
  }

  getRent(userId) {
    if (!userId) {
      console.error("Помилка: Не передано ID користувача.");
      return;
    }

    if (this.isVacant()) {
      this.#shelfNumber = null;
      this.#userId = userId;
      console.log(
        `Успіх: Книгу "${this.title}" видано читачеві (ID: ${userId}).`,
      );
    } else {
      console.warn(
        `Помилка: Книга "${this.title}" недоступна (вона вже видана).`,
      );
    }
  }
  returnBook(shelfNumber) {
    if (!Number.isInteger(shelfNumber)) {
      console.error("Вкажіть коректний номер полиці.");
      return;
    }
    this.#userId = null;
    this.shelfNumber = shelfNumber;
    console.log(`Книгу повернено на полицю ${shelfNumber}.`);
  }
}
try {
  console.log("1. Створюємо коректного юзера...");
  const user1 = new User(101, "Іван", "Франко", "Львів, вул. Каменярів");
  console.log("   Юзер створений:", user1.firstName);

  console.log("2. Створюємо коректну книгу...");
  const book1 = new Book("Тарас Шевченко", "Кобзар", 1840, 115, 10);
  console.log("   Книга створена:", book1.title);

  console.log("3. Перевірка оренди...");
  book1.getRent(user1.id);
  book1.getRent(user1.id);

  console.log("------------------------------------------------");
  console.log("4. Спроба створити книгу з неправильними даними...");
  const badBook = new Book("Test", "Test", 2020, -50, 1);
} catch (error) {
  console.error(">>> ПЕРЕХОПЛЕНО ПОМИЛКУ:", error.message);
}

try {
  console.log("5. Спроба створити юзера без імені...");
  const badUser = new User(102, "", "Doe", "Street");
} catch (error) {
  console.error(">>> ПЕРЕХОПЛЕНО ПОМИЛКУ:", error.message);
}
console.log(`--Exercice2--`);
class Animal {
  #name;

  constructor(name) {
    if (new.target === Animal) {
      throw new TypeError(
        "Неможливо створити екземпляр абстрактного класу Animal. Використовуйте Tiger або Wolf.",
      );
    }
    this.name = name;
  }
  get name() {
    return this.#name;
  }
  set name(value) {
    if (typeof value !== "string") {
      throw new TypeError(
        `Помилка: Ім'я тварини має бути рядком, отримано ${typeof value}.`,
      );
    }
    const emptyName = value.trim();
    if (emptyName.length === 0) {
      throw new RangeError("Помилка: Ім'я тварини не може бути порожнім.");
    }
    this.#name = emptyName;
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
    console.log(` ${this.name} (Тигр): Я крадусь у високій траві... Стрибок!`);
  }

  growl() {
    console.log(` ${this.name} (Тигр): РРР-МЯУ! Тигр з’їсть тебе!`);
  }
}
class Wolf extends Animal {
  hunting() {
    console.log(` ${this.name} (Вовк): Ми оточуємо здобич зграєю!`);
  }

  growl() {
    console.log(` ${this.name} (Вовк): АУУУУУ! (Виття на місяць)`);
  }
}
try {
  console.log("--- 1. Створення коректних об'єктів ---");
  const shereKhan = new Tiger("Шерхан");
  const akela = new Wolf("Акела");
  shereKhan.hunting();
  shereKhan.growl();
  akela.hunting();
  akela.growl();
  console.log("\n--- 2. Перевірка валідації (помилка імені) ---");
  const badWolf = new Wolf("   ");
} catch (error) {
  console.error(">>> СПІЙМАНО ПОМИЛКУ:", error.message);
}

try {
  console.log("\n--- 3. Перевірка абстрактності ---");
  const unknown = new Animal("Чупакабра");
} catch (error) {
  console.error(">>> СПІЙМАНО ПОМИЛКУ:", error.message);
}
