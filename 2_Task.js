// Задача о странных числах
// 1 вариант
function strangeNumbers (num) {
    let divArray = []; // создаем пустой массив, где будут храниться делители
    let sum = 0; // переменная для хранения суммы всех делителей
    if ( num === 1) {
        return false;  // если входящее число равно 1 возвращаем false, так как делится сама на себя
    }
    for (let i = 1; i <= num / 2; i++) { // циклом находим делители, перебирая числа до половины входящего числа включительно, тк дальше проверять нет смысла
        if (num % i === 0) {
            divArray.push(i);  //если num делится без остатка на i, то сохраняем i в массив divArray
        }
    }
    for (let i = 0; i < divArray.length; i++) {
        sum = sum + divArray[i];  //при помощи цикла складываем все получившиеся делители из массива divArray и сохраняем результат в переменную sum
    }
    return num === sum; //возвращаем результат сравнения двух чисел
}

console.log(strangeNumbers(1)) //false
console.log(strangeNumbers(6)) //true
console.log(strangeNumbers(28)) //true
console.log(strangeNumbers(9)) //false
console.log(strangeNumbers(33550336)) //true
console.log(strangeNumbers(79)) //false
console.log(strangeNumbers(50)) //false
console.log(strangeNumbers(8128)) //true
console.log(strangeNumbers(496)) //true

// 2 вариант

function isStrangeNumbers (num) {
    let divArray = []; // создаем пустой массив, где будут храниться делители
    let sum = 0; // переменная для хранения суммы всех делителей
    if ( num === 1) {
        return false;  // если входящее число равно 1 возвращаем false, так как делится сама на себя
    }
    for (let i = 1; i <= num / 2; i++) { // циклом находим делители, перебирая числа до половины входящего числа включительно, тк дальше проверять нет смысла
        if (num % i === 0) {
            divArray.push(i);  //если num делится без остатка на i, то сохраняем i в массив divArray
        }
    }
    divArray.map((item) => sum += item); // при помощи метода map перебираем каждый элемент (item) массива divArray и каждый раз увеличиваем переменную sum на item
    return num === sum; //возвращаем результат сравнения двух чисел
}

console.log('------------------------------')

console.log(isStrangeNumbers(1)) //false
console.log(isStrangeNumbers(6)) //true
console.log(isStrangeNumbers(28)) //true
console.log(isStrangeNumbers(9)) //false
console.log(isStrangeNumbers(33550336)) //true
console.log(isStrangeNumbers(79)) //false
console.log(isStrangeNumbers(50)) //false
console.log(isStrangeNumbers(8128)) //true
console.log(isStrangeNumbers(496)) //true


const numbers = [1, 2, 3, 4];
const sumOfNumbers = numbers.reduce((acc, number) => acc + number);

console.log(sumOfNumbers)

// 3 вариант

function strangeNumbersCheck (num) {
    let divArray = []; // создаем пустой массив, где будут храниться делители
    if ( num === 1) {
        return false;  // если входящее число равно 1 возвращаем false, так как делится сама на себя
    }
    for (let i = 1; i <= num / 2; i++) { // циклом находим делители, перебирая числа до половины входящего числа включительно, тк дальше проверять нет смысла
        if (num % i === 0) {
            divArray.push(i);  //если num делится без остатка на i, то сохраняем i в массив divArray
        }
    }
    const sum = divArray.reduce((summa, item) => summa + item); // reduce к каждому элементу массива divArray выполняет функцию сложения ячейки массива (item) к переменной summa, а затем возвращает summa, которая записывается в переменную sum
    return num === sum; //возвращаем результат сравнения двух чисел
}

console.log('------------------------------')

console.log(strangeNumbersCheck(1)) //false
console.log(strangeNumbersCheck(6)) //true
console.log(strangeNumbersCheck(28)) //true
console.log(strangeNumbersCheck(9)) //false
console.log(strangeNumbersCheck(33550336)) //true
console.log(strangeNumbersCheck(79)) //false
console.log(strangeNumbersCheck(50)) //false
console.log(strangeNumbersCheck(8128)) //true
console.log(strangeNumbersCheck(496)) //true
