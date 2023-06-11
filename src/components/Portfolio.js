import React, { useState } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

const PROJECTS = [
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg',
    category: 'Business Cards',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
    category: 'Websites',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
    category: 'Websites',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg',
    category: 'Websites',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg',
    category: 'Business Cards',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png',
    category: 'Websites',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
    category: 'Websites',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
    category: 'Business Cards',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png',
    category: 'Websites',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png',
    category: 'Flayers',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg',
    category: 'Websites',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg',
    category: 'Business Cards',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg',
    category: 'Websites',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
    category: 'Websites',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
    category: 'Business Cards',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg',
    category: 'Websites',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png',
    category: 'Flayers',
  },
];

const FILTERS = ['All', 'Websites', 'Flayers', 'Business Cards']

/**
 * Компонент отвечающий за вывод блока фильтров и портфолио. Родительский компонент App. Дочерние компоненты Toolbar (блок отображающий кнопки фильтров), ProjectList (блок отображющий непосредственно само портфолио)
 *
 */
const Portfolio = () => {
  const projects = PROJECTS;
  const filters = FILTERS;

  const [selected, setSelected] = useState('All');

  /**
   * Фильтрует проекты в портфолио в зависимости от выбранного фильтра
   *
   * @param {object} items Список проектов.
   * @param {string} filter значение выбранного фильтра.
   */
  const filterProject = (items, filter) => {
    switch (filter) {
      case 'Websites':
        return items.filter((item) => item.category === 'Websites');
      case 'Flayers':
        return items.filter((item) => item.category === 'Flayers');
      case 'Business Cards':
        return items.filter((item) => item.category === 'Business Cards');
      default:
        return items;
    }
  };

  /**
   * Обновляет состояние выбранного пункта фильтров
   *
   * @param {string} selected выбранный пункт фильтров, приходит из компонента Toolbar.
   */
  const SelectFilterHandler = (selected) => {
    setSelected(selected);
  };

  const visibleProject = filterProject(projects, selected);

  return (
    <div className="wrapper">
      <Toolbar
        filters={filters}
        selected={selected}
        onSelectFilter={SelectFilterHandler}
      />
      <ProjectList projects={visibleProject} />
    </div>
  );
};

export default Portfolio;
