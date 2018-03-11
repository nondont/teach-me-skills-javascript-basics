//
// var form = document.getElementById("submit");
//
//
// alert (form);

function man() {
        // 1. Создаём новый объект XMLHttpRequest
        var xhr = new XMLHttpRequest();
// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
        xhr.open('GET', 'https://randomuser.me/api/?gender=male', false);
// 3. Отсылаем запрос
        xhr.send();
//4. Если код ответа сервера не 200, то это ошибка
        if (xhr.status != 200) {
            // обработать ошибку
            alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
        } else {
            // вывести результат
            alert(xhr.responseText); // responseText -- текст ответа.
        }

    }


function women()  {
    // 1. Создаём новый объект XMLHttpRequest
    var xhr = new XMLHttpRequest();
// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
    xhr.open('GET', 'https://randomuser.me/api/?gender=female', false);
// 3. Отсылаем запро
    xhr.send();
// 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
        // обработать ошибку
        alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    }
    else {
        var responseObj = JSON.parse(xhr.responseText);

        console.log(responseObj.value.results.picture.large);
        console.log(responseObj.value.results.name.first);
        console.log(responseObj.value.results.name.last);
        console.log(responseObj.value.results.gender);
        console.log(responseObj.value.results.location);
        console.log(responseObj.value.results.dob);
    }
}






