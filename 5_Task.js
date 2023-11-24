const data = [
    {
        "fname": "Syed",
        "lname": "Lees"
    },
    {
        "fname": "Corretta",
        "lname": "Sapp"
    },
    {
        "fname": "Alberto",
        "lname": "Conn"
    },
    {
        "fname": "Janice",
        "lname": "Fielack"
    },
    {
        "fname": "Shelton",
        "lname": "Marashi"
    }
]

function List(val) {
    this.val = val;
    this.next = null;
}

function createList(arr) {
    let node, temp;
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) { // начиная с последнего элемента массива до первого, проходим циклом по массиву
        if (!node) { // если node переменная пустая, то помещаем в нее переменную типа List, созданную от элемента i массива
            node = new List(arr[i]);
        } else { // далее при следующих проверках node будет не пустая - выполняются следующие действия
            temp = new List(arr[i]); //во временную переменную помещаем переменную типа List, созданную от элемента i массива
            temp.next = node; // в качестве ссылки на следующую ноду к временной переменной присваеваем node
            node = temp; // в node присваеваем значение переменной temp
        }
        newArr.push(node); // добавляем получившуюся ноду в массив
    }
    return newArr.reverse(); // возвращаем перевернутый получившийся массив
}

console.log(createList(data));
