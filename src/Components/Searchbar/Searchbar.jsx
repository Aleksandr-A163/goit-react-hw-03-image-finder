import React, { Component } from "react";
import { toast } from "react-toastify";
import s from "./Searchbar.module.css";
import PropTypes from 'prop-types'

class SearchBar extends Component {

    static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }
  
  state = {
    name: "",
  };


    
  handleChange = e => {
    this.setState({ name: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.name.trim() === "") {
      toast.error("Please enter the name of the request");
      return;
    }

    const { onSubmit } = this.props;
    const { name } = this.state;
    onSubmit(name);
    this.setState({ name: " " });
  };
  render() {
      const { name } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
          </button>
          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={name}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}



export default SearchBar;