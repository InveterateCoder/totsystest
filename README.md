# TOT Systems' test
### Завершённый тест для _TOT Systems_ ###

Познакомиться со мной можно [здесь](http://arthur-grigoryan.ga)

<br />

## Запуск ##

1. Склонировать данный репозиторий
1. Убедившись, что на компьютере установлен NodeJS, установить все зависимости (npm i из под папки где находится package.json)
1. Запустить в режиме development (npm start из под той же папки, также прописан build, но на него нет сервера)

## Технологии ##

Описание | Технологии
-------- | ----------
Клиент   | react (библиотека)
|| react-router-dom (URL маршрутизация на стороне клиента)
|| redux/react-redux (централизованное хранилище для компонентов)
СSS      | bootstrap 4 (CSS фрейм от Twitter)
|| react-bootstrap (поддержка bootstrap еффектов без завизимости от JQuery)
|| @fortawesome/fontawesome-free (популярные иконки бесплатно)

## Фишки ##

Самостоятельно настроенный упаковщик Webpack работающий в синхронизации с транспелятором Babel. В потдержку были включены перевод CSS файлов в index (style-loader, css-lodaer), картинки и шрифты (file-loader), также плагин для переноса папки assets в рабочую директорию (нужно для загрузки браузером данных инициализации локального хранилища). Код написан по стандартам airbnb с маленькими отклонениями (личные предпочтения).

## О задании и его выполнении ##

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
