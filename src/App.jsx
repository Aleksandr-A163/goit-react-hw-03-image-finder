import React, { Component } from "react";
import * as API from "./service/service-api";
import Button from "./Components/Button/Button";
import LoaderSpinner from "./Components/Loader/Loader";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Searchbar from "./Components/Searchbar/Searchbar";
import Modal from "./Components/Modal/Modal";
import { mapper } from "./helpers/mapper";
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
  largeImage: '',
  showModal: false,
  error: null,
  };
 

  componentDidUpdate(prevProps, prevState) {
    const { name } = this.state;
    if (name !== prevState.name) {
      this.getImages()
    }
    if (prevState.page !== this.state.page) {
      this.getImages()
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
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
    })
  };

  modalClose = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }));
  };

  onClickLargeImage = (imageModal) => {
    this.setState({ largeImage: imageModal });
    this.modalClose();
  };

  getImages = () => {
    const { name, page } = this.state;
    this.setState({ isLoading: true });

    API.getImages({ name, page })
      .then(response => {
      this.setState(prevState => ({
        images: [...prevState.images, ...mapper(response)],
        page: prevState.page + 1,
      }));
    })
    .catch((error) => this.setState({ error: error }))
        .finally(() => this.setState({ isLoading: false }));
  };

  render() {
const {  images, showModal, isLoading, largeImage, name } = this.state;
    return(
      <div className={style.App}>
        <Searchbar onSubmit={this.onChangeName} />
        {isLoading && <LoaderSpinner />}
        {images.length !== 0 ? (
          <ImageGallery images={images} onOpenModal={this.onClickLargeImage} />
          ) : (
          name !== '' && <p>No found image</p> 
        )}
        {images.length >= 12 && <Button onClick={this.clickLoadMore} />}
        {showModal && (
          <Modal
            onClose={this.modalClose}
            imageModal={largeImage.largeImageURL}
          />
        )}

      </div>
    );
  }
}

export default App;
