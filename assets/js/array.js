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
          
            console.log(`Помилка: Книга "${this.title}" зараз зайнята (у юзера ID ${this.borrowerId}).`);
        }
    }
}




const user1 = new User(10, "Олена", "Коваленко", "Київ, вул. Франка 5");
const user2 = new User(25, "Андрій", "Шевченко", "Львів, пл. Ринок 1");


const harryPotter = new Book("J.K. Rowling", "Harry Potter", 1997, 300, 7);

console.log("--- КРОК 1: Перевірка нової книги ---");
console.log("Чи вільна книга?", harryPotter.isVacant()); 
console.log("Полиця:", harryPotter.shelfNumber);         
console.log("ID читача:", harryPotter.borrowerId);       

console.log("\n--- КРОК 2: Олена (ID 10) бере книгу ---");
harryPotter.getRent(user1.id); 


console.log("Стан книги після видачі:");
console.log("Чи вільна?", harryPotter.isVacant());       
console.log("Полиця:", harryPotter.shelfNumber);         
console.log("ID читача:", harryPotter.borrowerId);      

console.log("\n--- КРОК 3: Андрій (ID 25) намагається взяти ту ж книгу ---");
harryPotter.getRent(user2.id); 
