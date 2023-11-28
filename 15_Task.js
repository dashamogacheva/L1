function resolveAfter2Seconds(num) {
    return new Promise((resolve) => { // функция возвращает num через 2 секунды, по результату промиса "выполнен" (resolve)
        setTimeout(() => {
            resolve(num);
        }, 2000);
    });
}
// ассинхронная функция с использованием await
async function func() {
    // при помощи await запись в константу х осуществляется только после получения результата выполнения функции resolveAfter2Seconds
    return await resolveAfter2Seconds(10);
}

func().then(result => console.log(result)); // 10