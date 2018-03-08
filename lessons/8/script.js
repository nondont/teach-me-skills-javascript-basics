document.addEventListener('DOMContentLoaded', function() {
    /**
     * Функции таймеры
     */

    // var timerId = setTimeout(function() {
    //     alert('Hello, World!');
    // }, 2000);

    // console.log(timerId);

    // setTimeout(function() {
    //     clearTimeout(timerId);
    // }, 1000);

    // var counter = 0;
    // var id = setInterval(function() {
    //     console.log(++counter);

    //     if (counter === 10) {
    //         clearInterval(id);
    //     }
    // }, 1000);


    // var i;
    // for (i = 0; i < 10; ++i) {
    //     setTimeout(
    //         function() {
    //             console.log(i);
    //         },
    //         100
    //     );
    // }

    // var i;
    // for (i = 0; i < 10; ++i) {
    //     setTimeout(
    //         (function(i) {
    //             return function() {
    //                 console.log(i);
    //             }
    //         })(i),
    //         100
    //     );
    // }

    // var i;
    // for (i = 0; i < 10; ++i) {
    //     (function(j) {
    //         setTimeout(function() { console.log(j) }, 100);
    //     })(i);
    // }

    // POST /users
    // GET /users

    // id |  name  | email
    // 1  |  Vasia | vasia@mail.ru
    // 2  |  Petia | petia@mail.ru

    // [
    //     {
    //         id: 1,
    //         name: 'Vasia',
    //         email: 'vasia@mail.ru'
    //     },
    //     {
    //         id: 2,
    //         name: 'Petia',
    //         email: 'petia@mail.ru'
    //     }
    // ]
    // GET, POST, PUT, PATCH, DELETE




    /**
     * xhr Синхронные запросы
     */
    // // 1. Создаём новый объект XMLHttpRequest
    // var xhr = new XMLHttpRequest();

    // // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
    // xhr.open('GET', 'http://api.icndb.com/jokes/random', false);

    // // 3. Отсылаем запрос
    // xhr.send();

    // // 4. Если код ответа сервера не 200, то это ошибка
    // var responseObj = JSON.parse(xhr.responseText)

    // console.log(responseObj.value.joke);


    var form = document.getElementById('submit-form');
    var firstNameInput = form.elements.firstName;
    var lastNameInput = form.elements.lastName;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var firstName = firstNameInput.value;
        var lastName = lastNameInput.value;

        submitForm({ firstName: firstName, lastName: lastName });
    });

    function submitForm(parameters) {
        var xhr = new XMLHttpRequest();

        // Object.keys(parameters) возвращает массив вида ['firstName', 'lastName'].
        // Функция reduce вернёт массив вида ['firstName=John', 'lastName=Doe']
        // Почитать про функцию reduce можно здесь https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce.
        // Потом мы для этого массива вызывем функцию join, которая вернёт строку вида 'firstName=John&lastName=Doe',
        // которая будет записана в переменную queryString
        var queryString = Object.keys(parameters)
            .reduce(function(acc, key) {
                return acc.concat(key + '=' + encodeURIComponent(parameters[key]));
            }, [])
            .join('&');

        // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
        xhr.open('GET', 'http://api.icndb.com/jokes/random?' + queryString, true);

        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) {
                return;
            }

            var responseObj = JSON.parse(xhr.responseText);

            console.log(responseObj.value.joke);     
        };

        // 3. Отсылаем запрос
        xhr.send();
    }
});

var a = 0; // window.a = 0;

function foo() {
    console.log('bar')
}

// window.foo = function() {}
;(function() {
    var a = 0;

    function foo() {
        console.log('bar')
    }
})();
