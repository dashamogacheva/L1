// массив с функциями
const funcArray = [
    function () {
        return '1 функция';
    },
    function () {
        return '2 функция';
    },
    function () {
        return '3 функция';
    },
    function () {
        return '4 функция';
    },
    function () {
        return '5 функция';
    },
]
// функция, которая принимает массив функций и возвращает функцию, которая возвращает массив результатов вызовов функций из массива funcArray
function shortCircuitFunc (arr) {
    let resultArr = [];
    const func = () => { // функция, которая вызывает каждую функцию из массива и сохраняет в новый массив результат вызова
        for (let i = 0; i < arr.length; i++) {
            resultArr.push(arr[i]());
        }
        return resultArr; // func возвращает массив результатов
    }
    return func(); // shortCircuitFunc возвращает результат вызова функции func
}

console.log(shortCircuitFunc(funcArray)); // [ '1 функция', '2 функция', '3 функция', '4 функция', '5 функция' ]