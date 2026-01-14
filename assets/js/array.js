console.log("=== ЗАВДАННЯ 1: ===");

class User {
  static idCounter = 1;

  constructor(firstName, lastName, address) {
    if (typeof firstName !== "string" || firstName.trim().length === 0) {
      throw new Error("User Error: Ім'я має бути непорожнім рядком.");
    }
    if (typeof lastName !== "string" || lastName.trim().length === 0) {
      throw new Error("User Error: Прізвище має бути непорожнім рядком.");
    }
    if (typeof address !== "string" || address.trim().length === 0) {
      throw new Error("User Error: Адреса має бути непорожнім рядком.");
    }

    this.id = User.idCounter++;

    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }
}

class Book {
  constructor(author, title, year, totalPages, shelfNumber) {
    if (typeof author !== "string" || author.trim().length === 0) {
      throw new Error("Book Error: Автор має бути рядком.");
    }
    if (typeof title !== "string" || title.trim().length === 0) {
      throw new Error("Book Error: Назва має бути рядком.");
    }

    if (
      typeof year !== "number" ||
      year < 0 ||
      year > new Date().getFullYear()
    ) {
      throw new Error(
        `Book Error: Рік видання має бути коректним числом (до ${new Date().getFullYear()}).`
      );
    }
    if (typeof totalPages !== "number" || totalPages <= 0) {
      throw new Error("Book Error: Кількість сторінок має бути більше 0.");
    }
    if (typeof shelfNumber !== "number") {
      throw new Error("Book Error: Номер полиці має бути числом.");
    }

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
    if (typeof userId !== "number") {
      throw new Error("Book Error: ID користувача має бути числом.");
    }

    if (!this.isVacant()) {
      throw new Error(
        `Book Error: Книга "${this.title}" вже видана (у юзера ID ${this.borrowerId}).`
      );
    }

    this.shelfNumber = null;
    this.borrowerId = userId;
    console.log(`Успіх: Книгу "${this.title}" видано юзеру з ID ${userId}.`);
  }
}

try {
  const user1 = new User("Олена", "Коваленко", "Київ, вул. Франка 5");
  const user2 = new User("Андрій", "Шевченко", "Львів, пл. Ринок 1");

  console.log(
    `Створено юзерів: ${user1.firstName} (ID: ${user1.id}), ${user2.firstName} (ID: ${user2.id})`
  );

  const book1 = new Book("T. Shevchenko", "Kobzar", 1840, 115, 1);

  console.log("Спроба взяти книгу:");
  book1.getRent(user1.id);
} catch (error) {
  console.error("СТАЛАСЯ ПОМИЛКА:", error.message);
}

try {
  console.log("\n--- Тест валідації (некоректний рік) ---");
  const badBook = new Book("Auth", "Title", -500, 100, 1);
} catch (error) {
  console.error("ВАЛІДАЦІЯ СПРАЦЮВАЛА:", error.message);
}

console.log("\n=== ЗАВДАННЯ 2: ===");

class Animal {
  constructor(name) {
    if (typeof name !== "string" || name.trim().length === 0) {
      throw new Error("Animal Error: Ім'я тварини має бути непорожнім рядком!");
    }
    this.name = name;
  }

  hunting() {
    console.log(`${this.name} (Animal): Доганяю здобич!`);
  }

  growl() {
    console.log(`${this.name} (Animal): Грррр!`);
  }
}

class Tiger extends Animal {
  hunting() {
    console.log(`${this.name} (Tiger): Тихе підкрадання і стрибок!`);
  }
  growl() {
    console.log(`${this.name} (Tiger): РРР-МЯУ!`);
  }
}

class Wolf extends Animal {
  hunting() {
    console.log(`${this.name} (Wolf): Біжу на полювання!`);
  }
  growl() {
    console.log(`${this.name} (Wolf): Аууууу!`);
  }
}

try {
  const tiger = new Tiger("Шерхан");
  const wolf = new Wolf("Ракша");

  tiger.hunting();
  wolf.growl();
} catch (e) {
  console.error("ПОМИЛКА (Task 2):", e.message);
}
