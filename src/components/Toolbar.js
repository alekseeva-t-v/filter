const Toolbar = (props) => {
  const { filters, selected } = props;

  const buttons = filters.map((item) => {
    const clazz = selected === item ? 'btn-active' : 'btn';

    return (
      <button
        className={clazz}
        type="button"
        key={item}
        onClick={() => props.onSelectFilter(item)}
      >
        {item}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default Toolbar;
