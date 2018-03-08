## Домашнее задание

Есть [сервис](https://randomuser.me/) генерации случайных пользователей. Документацию по использованию можно найти [здесь](https://randomuser.me/documentation#howto).

### Задание

Сделать запрос на сервис, используя GET https://randomuser.me/api/ XMLHttpRequest, запрос должен выполняться асинхронно,
получить пользователя и отобразить на странице информацию о нём.

На странице должна быть форма, которая содержит [radio](http://htmlbook.ru/samhtml5/formy/pereklyuchateli), позволяющий выбирать пол пользователя: male, female.
А также [select](http://htmlbook.ru/html/select), который позволяет выбрать опцию из списка, select будет использоваться для выбора национальности, список поддерживаемых значений для random user generator можно посмотреть в [документации](https://randomuser.me/documentation#howto),
на всякий случай приведу его ниже.

* v1.0: AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IR, NL, NZ, TR, US
* v1.1: AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IR, NL, NZ, TR, US

При нажатии на кнопку отправки формы делается `GET` `https://randomuser.me/api/?gender=<пол_который_выбрал_пользователь>&nat=<национальность_которую_выбрал_пользователь>` запрос,
например, `https://randomuser.me/api/?gender=female&nat=us`.

Когда результаты будут получены в формате json, нужно отобразить на странице следующую информацию о пользователе:

* Аватар пользователя
* Полное имя
* Email
* Пол
* Адрес
* Дата рождение(dob)

Информацию можно отобразить в любом виде, например, как [здесь](https://bootsnipp.com/snippets/featured/user-profile-widget).

Для отрисовки информации о пользователе рекомендую воспользоваться клиентским шаблонизаторов, например, [mustache.js](https://github.com/janl/mustache.js).

### Mustache

#### Туториал

Вот подробный туториал, который расскажет, зачем нужен mustache, как его подключить, и как им пользоваться.

https://www.sitepoint.com/creating-html-templates-with-mustachejs/

В туториале приводятся примеры по использованию mustache вместе с [jquery](https://jquery.com/), если кому-то интересно, то можете, впринципе, уже начинать использовать jquery,
но я думаю нам будет достаточно и просто возможностей javascript. Материалы по jquery можно найти в README к следующему зянятию.

#### Интерактивный пример на codepen, где можно поиграться с шаблонизатором

https://codepen.io/joe-watkins/pen/ydbeB

#### Ещё один туториал

http://zetcode.com/javascript/mustache/


 
