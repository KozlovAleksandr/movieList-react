import "./films-list-item.css";

const FilmsListItem = (props) => {
  const {
    name,
    rating,
    onDelete,
    onToggleSeries,
    onToggleFavorite,
    series,
    favorite,
  } = props;

  let classNames = "list-group-item d-flex justify-content-between";

  if (series) {
    classNames += " series";
  }
  if (favorite) {
    classNames += " like";
  }

  return (
    <li className={classNames}>
      <span className="list-group-item-label" onClick={onToggleFavorite}>
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={rating}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={onToggleSeries}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default FilmsListItem;
