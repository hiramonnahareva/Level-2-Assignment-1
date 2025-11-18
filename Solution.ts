const formatValue = (input: string | number | boolean) => {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  if (typeof input === "number") {
    return input * 10;
  }

  if (typeof input === "boolean") {
    return (input = !input);
  }
};

const getLength = (input: string | Array<any>) => {
  if (typeof input === "string") {
    return input.length;
  }

  if (Array.isArray(input)) {
    return input.length;
  }
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const person1 = new Person("John Doe", 30);
const person2 = new Person("Alice", 25);

const filterByRating = (books: { title: string; rating: number }[]) => {
  return books.filter((book) => book.rating >= 4.0);
};

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const filterActiveUsers = (users: { name: string; isActive: boolean }[]) => {
  return users.filter((user) => user.isActive);
};

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

const printBookDetails = (book: Book): string => {
  return `Title: ${book.title}, Author: ${book.author}, Published Year: ${
    book.publishedYear
  }, Available: ${book.isAvailable ? "Yes" : "No"}`;
};

const getUniqueValues = (array1: number[], array2: number[]): number[] => {
  const set = new Set<number>([...array1, ...array2]);
  return Array.from(set); 

};   
 

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const calculateTotalPrice = (
  products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
): number => {
  return products.reduce((total, product) => {
    const discount = product.discount
      ? (product.price * product.discount) / 100
      : 0;
    const finalPrice = product.price - discount;
    return total + finalPrice * product.quantity;
  }, 0);
};

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];
