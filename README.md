# Тестовое задание "Список продуктов"

### Посетить сайт
<a href="https://test-task-fortylines.vercel.app/" _blank="true">Ссылка на сайт</a>

<a href="https://test-task-fortylines-backend.onrender.com/swagger" _blank="true">Ссылка на swagger</a>

### Stack
- React
- Vite
- TypeScript
- Redux Toolkit
- Scss
- axios
- Material UI

###  Установка и запуск проекта

###### Склонировать репозиторий
```shell
git clone https://github.com/BaitemirAsanbaev/test-task-fortylines.git
```

###### Установить библиотеки и запустить
```shell
npm i
npm run dev
```

### Функционал
- Отображение списка продуктов в виде карточек
- Возможность добавить продукт в избранное
- Фильтрация по категориям
- Фильтрация по избранным
- Поиск по имени и описанию
- хранение продуктов и категорий в локальном хранилище

### Структура проекта

###### components
Переиспользуемые tsx компоненты, испльзуются для ui. Содержат JSX и модульный scss
###### const
Постоянные переменные. Содержит api сервера
###### models
Модели для сущностей. Содержат interfaces для продуктов и категорий.
###### store
Redux. Содержит:
- слайсы для отслеживания состояний продуктов и категорий
- кастомные dispatch и selector хуки
- asyncThunk. Запросы на сервер
- инициализация и конфигурация store

### Backend
Для этого проекта я решил написать небольшой backend на nodejs express с базой данных sqlite