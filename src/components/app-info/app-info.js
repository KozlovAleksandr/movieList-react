import "./app-info.css";

const AppInfo = ({ films, isSeries }) => {
  return (
    <div className="app-info">
      <h1>Список фильмов</h1>
      <h2>Общее число фильмов: {films}</h2>
      <h2>Сериалы: {isSeries}</h2>
    </div>
  );
};

export default AppInfo;
