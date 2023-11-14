import moment from 'moment'; // импортируем библиотеку момент
// функция работы с датой принимает в себя action - тип действия, дату(или число) и формат вывода данных
export function workingWithDatesFunc(action, date, format) {
    switch (action) { // используя конструкцию switch определяется какое действие будет выполнено в зависимости от action
        case 'currentDate': // вывод текущей даты в нужном формате
            return moment().format(format);
        case 'dateFromNow': // подсчет когда была дата по сравнению с текущей
            return moment(date, format).fromNow();
        case 'subtractDate': // подсчет какая была дата по сравнению с текущей
            return moment().subtract(date, format).calendar();
        case 'addDate': // подсчет какая будет дата по сравнению с текущей
            return moment().add(date, format).calendar();
        default:
            console.log('Что-то ввели неверно. Попробуйте еще раз');
            break;
    }
}

console.log(workingWithDatesFunc('currentDate', 'dddd')); //Tuesday различные форматы даты
console.log(workingWithDatesFunc('currentDate', 'MMM Do YY')); //Nov 14th 23
console.log(workingWithDatesFunc('currentDate')); // 2023-11-14T15:57:52+03:00
console.log(workingWithDatesFunc('dateFromNow', '20111031', "YYYYMMDD")); // 12 years ago когда была эта дата
console.log(workingWithDatesFunc('subtractDate', 2, 'weeks')); // 11/04/2023 какая дата была 2 недели назад
console.log(workingWithDatesFunc('addDate', 10, 'days')); // 11/24/2023 какая дата будет спустя 10 дней