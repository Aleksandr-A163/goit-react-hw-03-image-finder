import PropTypes from "prop-types";
import style from "./ImageGalleryItem.module.css";

 function ImageGalleryItem({image, openModal }) {
    return (
     <>
        <img
          onClick={() => {
          openModal(image);
        }}
         src={image.webformatURL}
         className={style.imageGalleryItem__image}
         alt={image.tag}
       />
      
     </>
    );  
  };

ImageGalleryItem.propTypes = {
  image: PropTypes.object,
  openModal: PropTypes.func,
};

export default ImageGalleryItem;