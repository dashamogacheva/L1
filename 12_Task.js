const book = {
    name: 'Name of Book',
    author: "Author Name",
    yearOfPublication: 1999
};

// функция для получения значений свойств книги по параметру
function getParameter(parameter) { // на вход функции приходит нужный параметр
    return book[parameter]; // функция возвращает результат вызова объекта книги по параметру
}

// функция для изменения значений свойств книги по параметру
function changeParameter(parameter, value) { // на вход функции приходит нужный параметр и новое значение для параметра
    book[parameter] = value; // новое значение присваевается нужному параметру объекта книги
}


// примеры работы методов
console.log(book); //{ name: 'Name of Book', author: 'Author Name', yearOfPublication: 1999 }

console.log(getParameter("yearOfPublication")); // 1999
console.log(getParameter("name")); // Name of Book
console.log(getParameter("author")); // Author Name

console.log('--------------------------')

changeParameter("author", 'Petya');
console.log(getParameter("author")); // Petya
changeParameter("yearOfPublication", 2001);
console.log(getParameter("yearOfPublication")); // 2001
changeParameter("name", 'Adventure Petya');
console.log(getParameter("name")); // Adventure Petya

console.log(book); // { name: 'Adventure Petya', author: 'Petya', yearOfPublication: 2001 }