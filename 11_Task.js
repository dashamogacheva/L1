function shortCircuitFunc () {
    const num = 7; // внутри shortCircuitFunc существует константа num
    const func = () => { // внутренняя функция, внутри которой существует массив
        let arr = [];
        for (let i = 0; i < 10; i++) { // этот массив заполняется при помощи цикла до 10 элементов значением переменной num
            arr.push(num); // пример того, что внутренняя функция имеет доступ к переменной, объявленной во внешней функции
        }
        return arr;
    }
    return func(); // shortCircuitFunc возвращает результат вызова функции func
}

console.log(shortCircuitFunc()); // [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ]