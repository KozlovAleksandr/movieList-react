import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = [
    {
      name: "all",
      label: "Все фильмы",
    },
    {
      name: "favorite",
      label: "Лучшие",
    },
    {
      name: "moreThen5",
      label: "Рейтинг больше 5",
    },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
