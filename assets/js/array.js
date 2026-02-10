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
