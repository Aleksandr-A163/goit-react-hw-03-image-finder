import PropTypes from "prop-types";
import style from "./ImageGalleryItem.module.css";

function ImageGalleryItem ({
  webformatURL,
  largeImageURL,
  tags,
  openModal,
})  {
    return (
     <>
        <img
          onClick={openModal}
          src={webformatURL}
          alt={tags}
          data-source={largeImageURL}
         className={style.imageGalleryItem__image}
       />
      </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object,
  openModal: PropTypes.func,
};

export default ImageGalleryItem;