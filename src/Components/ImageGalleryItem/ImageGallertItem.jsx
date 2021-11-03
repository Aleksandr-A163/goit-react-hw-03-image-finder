import PropTypes from "prop-types";
import style from "./ImageGalleryItem.module.css";

 function ImageGalleryItem({src, openModal }) {
    return (
     <>
        <img
          onClick={() => {
          openModal(src);
        }}
         src={src}
         className={style.imageGalleryItem__image}
         alt="images"
       />
      
     </>
    );  
  };

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  openModal: PropTypes.func,
};

export default ImageGalleryItem;