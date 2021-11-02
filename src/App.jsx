import React, { Component } from "react";
import * as API from "./service/service-api";
import { mapper }  from "./helpers/maper";
import Button from "./Components/Button/Button";
import Loader from "./Components/Loader/Loader";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Searchbar from "./Components/Searchbar/Searchbar";
import Modal from "./Components/Modal/Modal";

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
    showSpiner: false,
  error: null,
  };
  
  componentDidMount() {
  const { page } = this.state;
  this.getImages(page);

  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    if (prevState.page !== page ) {
      this.getImages(page);
    }
  }

  onChangeName = name => {
    if (this.state.name === name) {
      return;
    }
    this.setState({ name, images: [], page: 1 });

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

  getImages = (name, page) => {
    this.setState({ isLoading: true });
    API.getImages(name, page)
      .then(({ data }) => {
        console.log(data.results);
        this.setState((prevState) => {
          return {
            images: [...prevState.images, ...mapper(data.results)],
          };
        });
      })
      .catch((error) => this.setState({ error: error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
};

  render() {
const {  images, onClose, showModal, showSpiner } = this.state;
    return(
      <div >
        <Searchbar onSubmit={this.onChangeName} />
        <ImageGallery images={images} />

        {images.length >= 12 && <Button onClick={this.clickLoadMore} />}
        {showModal && <Modal onClose={onClose} />}
        {showSpiner && (
          <div>
            <Loader />
          </div>
        )}
      </div>
    );
  }
}

export default App;
