//забув вітку другого завдання запушити гітхаб ;)

console.log("--- ЗАВДАННЯ 1  ---");

class User {
  constructor(id, firstName, lastName, address) {
    if (!id || !firstName || !lastName || !address) {
      throw new Error("User: Неможливо створити користувача. Всі поля (id, ім'я, прізвище, адреса) обов'язкові!");
    }

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }
}

class Book {
  constructor(author, title, year, totalPages, shelfNumber) {
    if (!author || !title || !year || !totalPages || !shelfNumber) {
      throw new Error(" Неможливо додати книгу. Не всі дані вказані.");
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
  
    if (!userId) {
        throw new Error(" Для видачі книги потрібно вказати ID користувача.");
    }

   
    if (!this.isVacant()) {
      throw new Error(`Книга "${this.title}" вже видана (у юзера ID ${this.borrowerId}).`);
    }


    this.shelfNumber = null;
    this.borrowerId = userId;
  }
}



try {

    const user1 = new User(10, "Олена", "Коваленко", "Київ, вул. Франка 5");
    const book1 = new Book("T. Shevchenko", "Kobzar", 1840, 115, 1);

    console.log("Спроба взяти книгу:");
    book1.getRent(user1.id);
    console.log("Успіх! Книгу видано."); 


    console.log("\nСпроба взяти зайняту книгу:");
    book1.getRent(25); 

} catch (error) {
    
    console.error("СТАЛАСЯ ПОМИЛКА:", error.message);
}

console.log("\n--- Тест валідації (некоректний юзер) ---");
try {
    const badUser = new User(); 
} catch (error) {
    console.error("СТАЛАСЯ ПОМИЛКА:", error.message);
}

console.log("--- ЗАВДАННЯ 2 ---");


class Animal {
    constructor(name) {
        if (!name) throw new Error("Animal: Тварина повинна мати ім'я!");
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
    const unknown = new Animal("Чупакабра");

    tiger.hunting();
    tiger.growl();
    
    wolf.hunting();
    wolf.growl();

    unknown.hunting();

} catch (e) {
    console.error("ПОМИЛКА (Task 2):", e.message);
}