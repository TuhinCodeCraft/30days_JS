// Activity 1: (Object Creation and Access)
// Task 1:
const book = {
    title: 'Javascript',
    author: 'Tuhin Ghosh',
    year: 2024
}
console.log(`The book object is here: ${book}`);

// Task 2:
console.log(`The title of the book is: ${book.title}`);
console.log(`The author of the book is: ${book.author}`);

// Activity 2: (Object methods)
// Task 3:
book.details = function () {
    return `The ${book.title} book is written by ${book.author}`
}
console.log(`Method Called: ${book.details()}`);

// Task 4:
book.updateYear = (year) => {
    book.year = year
}
book.updateYear(2020)
console.log(`The updated year of the book is: ${book.year}`);

// Activity 3: (Nested Objects)
// Task 5:
const library = {
    name: 'National Library',
    books: [
        {
            title: 'Python Programming',
            author: 'Rahul Das',
            year: 2000
        },
        {
            title: 'C Programming',
            author: 'Anushka Das',
            year: 2010
        },
        {
            title: 'C# Programming',
            author: 'Kunjal Das',
            year: 2020
        },
    ]
}
console.log(library);

// Task 6:
console.log(`The name of the library: ${library.name}`);
console.log('The books in the library: ');
library.books.forEach(book => {
    console.log(book.title);
})

// Activity 4: (This Keyword)
// Task 7:
book.yearDetails = function () {
    return `${this.title} book is issued in the year ${this.year}`
}
console.log(book.yearDetails());

// Activity 5: (Object iteration)
// Task 8:
for (const key in book) {
    console.log(`${key}: ${book[key]}`);
} 

// Task 9:
console.log(`Keys: ${Object.keys(book)}`);
console.log(`Values: ${Object.values(book)}`);