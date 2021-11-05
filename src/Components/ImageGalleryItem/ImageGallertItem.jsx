import PropTypes from "prop-types";
import style from "./ImageGalleryItem.module.css";

function ImageGalleryItem({
  images,
  onOpenModal,
})  {
    return (
     <>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <li className={style.imageGalleryItem} key={id}>
          <img
            src={webformatURL}
            alt=""
            className={style.imageGalleryItem__image}
            onClick={() => onOpenModal({ largeImageURL })}
          />
        </li>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;