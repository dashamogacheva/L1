// Задача о палиндроме
// 1 вариант
function palindromeCheck(str) {
    str = str.toLowerCase().replace(/[\s.,%]/g, ''); // преобразуем все буквы в нижний регистр, убираем из строки пробелы, точки, запятые
    let strArr = [...str]; // создаем массив букв из входящей строки
    let invertedStrArr = []; // создаем пустой массив для будущего заполнения
    for (let index = 1; index <= strArr.length; index++) { // проходим циклом по массиву strArr, начиная с 1 до длины массива
        invertedStrArr.push(strArr[strArr.length - index]); // заполняем массив invertedStrArr, символами из массива strArr, начиная с последней ячейки strArr
    }
    let invertedStr = invertedStrArr.join(''); // преобразуем массив invertedStrArr в строку, без разделения символов
    return invertedStr === str; //возвращаем результат сравнения строк
}

console.log(palindromeCheck('mama mia')); //false
console.log(palindromeCheck('А роза упала. на лапу Азора')); //true
console.log(palindromeCheck('оно')); //true
console.log(palindromeCheck('победа в руках синих')); //false
console.log(palindromeCheck('доход')); //true
console.log(palindromeCheck('осело колесо')); //true
console.log(palindromeCheck('Город дорог')); //true
console.log(palindromeCheck('У лип Леша нашел пилу.')); //true
console.log(palindromeCheck('аргентина манит негра')); //true

// 2 вариант аналогичен 1 варианту
function checkPalindrome(str) {
    str = str.toLowerCase().replace(/[\s.,%]/g, '');
    let strArr = [...str];
    let invertedStrArr = [];
    strArr.forEach(index => { // проходимся по массиву strArr при помощи метода forEach, чтобы для каждого элемента совершить одну и ту же операцию
        invertedStrArr.unshift(index); // заполняем массив invertedStrArr, вставляя каждый раз в начало массива элемент strArr, находящийся по индексу
    });
    let invertedStr = invertedStrArr.join('');
    return invertedStr === str;
}

console.log('--------------------------')

console.log(checkPalindrome('mama mia')); //false
console.log(checkPalindrome('А роза упала. на лапу Азора')); //true
console.log(checkPalindrome('оно')); //true
console.log(checkPalindrome('победа в руках синих')); //false
console.log(checkPalindrome('доход')); //true
console.log(checkPalindrome('осело колесо')); //true
console.log(checkPalindrome('Город дорог')); //true
console.log(checkPalindrome('У лип Леша нашел пилу.')); //true
console.log(checkPalindrome('аргентина манит негра')); //true

// 3 вариант

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[\s.,%]/g, ''); // понижаем регистр, удаляем пробелы, точки и запятые
    return str === str.split('').reverse().join(''); // split преобразует строку в массив, reverse переворачивает массив, join преобразует перевернутый массив обратно в строку
}

console.log('--------------------------')

console.log(isPalindrome('mama mia')); //false
console.log(isPalindrome('А роза упала. на лапу Азора')); //true
console.log(isPalindrome('оно')); //true
console.log(isPalindrome('победа в руках синих')); //false
console.log(isPalindrome('доход')); //true
console.log(isPalindrome('осело колесо')); //true
console.log(isPalindrome('Город дорог')); //true
console.log(isPalindrome('У лип Леша нашел пилу.')); //true
console.log(isPalindrome('аргентина манит негра')); //true