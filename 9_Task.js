const json = {
    "name": "Maria Smith",
    "age": 32,
    "isMarried": true,
    "hobbies": ["reading", "jogging"],
    "notes": null
}
function jsonToString(json) {
    let str = '{';
    let arr = [];
    let i = 0;
    for (let value of Object.values(json)) { // перебираем все значения во входящем в функцию json и сохраняем их в массив
        arr.push(value);
    }
    for (let key in json) { // перебираем все ключи в json и заполняем строку
        str += `"${key}":"${arr[i]}",`;
        i++;
    }
    str += '}';
    return str;
}

console.log(jsonToString(json));