let jsonStr = '"name":"Maria Smith", "age":"32", "isMarried":"true", "notes":"null"';
function strToJson(str) {
    if (typeof str !== 'object'){
        return jsonStr = new Function('return {' + str + '};')(); // новая анонимная функция возвращает объект, созданный из строки
    }
}
console.log(typeof jsonStr) // string
strToJson(jsonStr); // вызов функции преобразования строки в объект
console.log(typeof jsonStr) // object
console.log(jsonStr.name) // Maria Smith
console.log(jsonStr.isMarried) // true
console.log(jsonStr) // { name: 'Maria Smith', age: '32', isMarried: 'true', notes: 'null' }