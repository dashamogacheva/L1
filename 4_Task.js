function getCorrect(count, srtArr) { // функция принимает 2 аргумента - количество и массив склонений слова
    if (count < 0) { // если число отрицательное - возвращаем ошибку
        return 'Число некорректное. Попробуйте еще раз.';
    }
    count %= 100; // откидываем от числа все цифры, оставляя только последние 2 разряда, путем деления без остатка на 100
    if (count >= 5 && count <= 20) { // если получившееся число от 5 до 20 включительно - возвращаем 2 элемент массива - правильный вариант склонения
        return count + ' ' + srtArr[2];
    }
    count %= 10; // если проверка не прошла, откидываем от числа еще цифры, оставляя только последний разряд, путем деления без остатка на 10
    if (count === 1) { // если получившееся число равно 1 - возвращаем 0 элемент массива - правильный вариант склонения
        return count + ' ' + srtArr[0];
    }
    if (count >= 2 && count <= 4) { // если получившееся число от 2 до 4 включительно - возвращаем 1 элемент массива - правильный вариант склонения
        return count + ' ' + srtArr[1];
    }
    return count + ' ' + srtArr[2]; // если все проверки не прошли - возвращаем единственный верный вариант для оставшихся случаев - 2 элемент массива
}

console.log(getCorrect(13, ['яблоко', 'яблока', 'яблок'])); // 13 яблок
console.log(getCorrect(24, ['апельсин', 'апельсина', 'апельсинов']));
console.log(getCorrect(21, ['рыба', 'рыбы', 'рыб']));
console.log(getCorrect(1009, ['самолет', 'самолета', 'самолетов']));
console.log(getCorrect(200, ['шляпа', 'шляпы', 'шляп']));
console.log(getCorrect(458, ['книга', 'книги', 'книг']));
console.log(getCorrect(5, ['кость', 'кости', 'костей']));
console.log(getCorrect(22, ['пирог', 'пирога', 'пирогов']));