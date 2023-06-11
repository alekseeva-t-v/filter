/**
 * Компонент отвечающий за вывод блока кнопок фильтров. Родительский компонент Portfolio
 *
 * @param {object} props.filters Массив фильтров.
 * @param {string} props.selected выбранный активный фильтр.
 * @param {function} props.onSelectFilter Функция, передающая выбранный параметр фильтрации в компонент Portfolio.
 */
const Toolbar = (props) => {
  const { filters, selected, onSelectFilter } = props;

  const buttons = filters.map((item) => {
    const className = selected === item ? 'btn-active' : 'btn';

    return (
      <button
        className={className}
        type="button"
        key={item}
        onClick={() => onSelectFilter(item)}
      >
        {item}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default Toolbar;
