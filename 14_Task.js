async function getPictureData(URL) {
    let promise = await fetch(URL); // делаем запрос по урл картинки
    if (promise.ok) {
        return promise; // если статус промиса выполнено успешно, то возвращается результат отправки запроса по урлу картинки, иначе возврат false
    }
    return false;
}

const fetchURL = `https://sgp1.vultrobjects.com/kaushal-meme-api/meme_api_prod/memes/265.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=31MV23N3G46Q2UG2RT1V%2F20231124%2Fsgp1%2Fs3%2Faws4_request&X-Amz-Date=20231124T221305Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=536267c4a4524a7eddc2928121396c9cdab772cc6d210a9ff17320679848b329`;
getPictureData(fetchURL).then(q => {console.log(q)})