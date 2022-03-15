import { Component } from "react";

import "./films-add-form.css";

class FilmsAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rating: "",
    };
  }

  onValueChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state.name, this.state.rating);
    this.setState({
      name: "",
      rating: "",
    });
  };

  render() {
    const { name, rating } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавить фильм</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Название"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Рейтинг"
            name="rating"
            value={rating}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default FilmsAddForm;
