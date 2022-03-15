import FilmsListItem from "../films-list-item/films-list-item";

import "./films-list.css";

const FilmsList = ({ data, onDelete, onToggleSeries, onToggleFavorite }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <FilmsListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleSeries={() => onToggleSeries(id)}
        onToggleFavorite={() => onToggleFavorite(id)}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default FilmsList;
