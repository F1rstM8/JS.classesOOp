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
