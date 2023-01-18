import { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
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
      ],
      filters: ['All', 'Websites', 'Flayers', 'Business Cards'],
      selected: 'Business Cards',
    };
  }

  filterProject = (items, filter) => {
    switch (filter) {
      case 'Websites':
        return items.filter(item => item.category === 'Websites');
      case 'Flayers':
        return items.filter(item => item.category === 'Flayers');
      case 'Business Cards':
        return items.filter(item => item.category === 'Business Cards');
      default:
        return items;
    }
  }

  onSelectFilter = (selected) => {
    this.setState({selected});
  }

  render() {
    const {projects, filters, selected} = this.state
    const visibleProject = this.filterProject(projects, selected)
    return (
      <div className="wrapper">
        <Toolbar
          filters={filters}
          selected={selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList
          projects={visibleProject} />
      </div>
    );
  }
}

export default Portfolio;
