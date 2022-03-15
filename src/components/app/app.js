import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import FilmsList from "../films-list/films-list";
import FilmsAddForm from "../films-add-form/films-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Terminator 2",
          rating: 9,
          series: false,
          favorite: false,
          id: 1,
        },
        {
          name: "The Dark Knight",
          rating: 10,
          series: false,
          favorite: false,
          id: 2,
        },
        {
          name: "Haunt",
          rating: 4,
          series: false,
          favorite: false,
          id: 3,
        },
      ],
      term: "",
      filter: "all",
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, rating) => {
    if (name && rating) {
      const newItem = {
        name,
        rating,
        series: false,
        id: this.maxId++,
        favorite: false,
      };
      this.setState(({ data }) => {
        const newArr = [...data, newItem];
        return {
          data: newArr,
        };
      });
    }
  };

  onToggleSeries = (id) => {
    // this.setState(({ data }) => {
    //   const index = data.findIndex((elem) => elem.id === id);
    //   const old = data[index];
    //   const newItem = { ...old, series: !old.series };
    //   const newArr = [
    //     ...data.slice(0, index),
    //     newItem,
    //     ...data.slice(index + 1),
    //   ];
    //   return {
    //     data: newArr,
    //   };
    // });
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, series: !item.series };
        }
        return item;
      }),
    }));
  };

  onToggleFavorite = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, favorite: !item.favorite };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case "favorite":
        return items.filter((item) => item.favorite);
      case "moreThen5":
        return items.filter((item) => item.rating > 5);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;

    const films = this.state.data.length;
    const isSeries = this.state.data.filter((item) => item.series).length;

    const visableDate = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo films={films} isSeries={isSeries} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>

        <FilmsList
          data={visableDate}
          onDelete={this.deleteItem}
          onToggleSeries={this.onToggleSeries}
          onToggleFavorite={this.onToggleFavorite}
        />

        <FilmsAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
