// массив с функциями
const funcArray = [
    function () {
        console.log('1 функция');
    },
    function () {
        console.log('2 функция');
    },
    function () {
        console.log('3 функция');
    },
    function () {
        console.log('4 функция');
    },
    function () {
        console.log('5 функция');
    },
]
// функция, которая по очереди вызывает функции из массива, на вход приходит массив функций
function executeFunction(arr) {
    // циклом проходим по массиву от нулевого до последнего элемента и вызываем функции из массива по индексу
    for (let i = 0; i < arr.length; i++) {
        arr[i]();
    }
}

executeFunction(funcArray);