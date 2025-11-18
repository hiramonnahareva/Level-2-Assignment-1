var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var formatValue = function (input) {
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
var getLength = function (input) {
    if (typeof input === "string") {
        return input.length;
    }
    if (Array.isArray(input)) {
        return input.length;
    }
};
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age);
    };
    return Person;
}());
var person1 = new Person("John Doe", 30);
var person2 = new Person("Alice", 25);
var filterByRating = function (books) {
    return books.filter(function (book) { return book.rating >= 4.0; });
};
var books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
var filterActiveUsers = function (users) {
    return users.filter(function (user) { return user.isActive; });
};
var users = [
    { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
    { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
    { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];
var myBook = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
    isAvailable: true,
};
var printBookDetails = function (book) {
    return "Title: ".concat(book.title, ", Author: ").concat(book.author, ", Published Year: ").concat(book.publishedYear, ", Available: ").concat(book.isAvailable ? "Yes" : "No");
};
var getUniqueValues = function (array1, array2) {
    var set = new Set(__spreadArray(__spreadArray([], array1, true), array2, true));
    return Array.from(set);
};
var array1 = [1, 2, 3, 4, 5];
var array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));
var calculateTotalPrice = function (products) {
    return products.reduce(function (total, product) {
        var discount = product.discount
            ? (product.price * product.discount) / 100
            : 0;
        var finalPrice = product.price - discount;
        return total + finalPrice * product.quantity;
    }, 0);
};
var products = [
    { name: "Pen", price: 10, quantity: 2 },
    { name: "Notebook", price: 25, quantity: 3, discount: 10 },
    { name: "Bag", price: 50, quantity: 1, discount: 20 },
];
