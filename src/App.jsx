import React, { Component } from "react";
import { getImages } from "./service/service-api";
import Button from "./Components/Button/Button";
import Loader from "./Components/Loader/Loader";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Searchbar from "./Components/Searchbar/Searchbar";
import Modal from "./Components/Modal/Modal";
import style from "./App.css";

const INITIAL_STATE = {
  page: 1,
  images: []
}

class App extends Component {

  state = {
  ...INITIAL_STATE,
  isLoading: false,
  name: "",
  largeImageURL: "",
  showModal: false,
  error: null,
  };
 

  componentDidUpdate(prevProps, prevState) {
    const { name } = this.state;
    if (name !== prevState.name) {
      this.searchImage()
        .catch((error) => this.setState({ error: error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  onChangeName = name => {
    this.setState({
      name,
      page: 1,
      images: [],
    });
  };



  clickLoadMore = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return { page: prevState.page + 1 };
    });
  };

  onClose = () => {
    this.setState({ showModal: false });
  };

  onClickLargeImage = largeImage => {
    this.setState({ largeImage });
    this.toggleModal();
  };

  searchImage = () => {
    const { name, page } = this.state;
    this.setState({ loading: true });

    return getImages(name, page).then(images => {
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
      }));
    });
  };

  render() {
const {  images, largeImage, onClose, showModal, isLoading } = this.state;
    return(
      <div className={style.App}>
        <Searchbar onSubmit={this.onChangeName} />
        <ImageGallery images={images} onOpenModal={this.onClickLargeImage} />

        {images.length >= 12 && <Button onClick={this.clickLoadMore} />}
        {showModal && (
          <Modal onClose={onClose}>
          <img
              src={largeImage.largeImageURL}
              alt={largeImage.tag}
              id={largeImage.id}
            />
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
        {isLoading && <Loader/> }
      </div>
    );
  }
}

export default App;
