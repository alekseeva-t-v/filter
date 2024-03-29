# Портфолио с фильтрами

Учебный проект курса [React для JS-разработчиков](https://netology.ru/programs/react)

## **Задача**

Реализация портфолио с фильтрами

## **Описание проекта**

Разработан компонент `Portfolio`, хранящий список фильтров, активный фильтр, а также список проектов.

Сами фильтры отображаются в компоненте без состояния `Toolbar`, которому от `Portfolio` передаются три свойства:

- `filters` — список фильтров, название которых совпадает с категориями проектов;
- `selected` — активный фильтр;
- `onSelectFilter` — обработчик события, который реагирует на выбор пользователем одного из фильтров, обработчик принимает один аргумент — строку с названием фильтра.

Изображения самих проектов отображаются компонентом без состояния `ProjectList`, которому от `Portfolio` мы передаём список проектов — в свойство `projects`. Отображение проектов — это единственная ответственность компонента `ProjectList`.

Чтобы компонент `Portfolio` мог реагировать на выбор пользователем фильтра проектов, например, `Business Cards`, и передавать отфильтрованные по категории `Business Cards` проекты в компонент `ProjectList`, в компонент `Portfolio` добавлено состояние (state).

В ходе выполнения проекта решены следующие задачи:

- установлено состояние выбранного фильтра в обработчике события, который `Portfolio` передаёт в свойство `onSelectFilter` компонента `Toolbar`;
- из компонента `Portfolio` передан активный фильтр в свойство `selected` компонента `Toolbar`;
- в компоненте `Portfolio` отфильтрованы по активному фильтру проекты и переданы в компонент `ProjectList`.

## **Стек технологий**

![HTML](./public/images/html.svg)
![CSS](./public/images/css.svg)
![JS](./public/images/js.svg)
![REACT](./public/images/react.svg)
![GIT](./public/images/git.svg)

## [**Демо**](https://filter-umber.vercel.app/)

![demo](./public/images/demo.jpg)
