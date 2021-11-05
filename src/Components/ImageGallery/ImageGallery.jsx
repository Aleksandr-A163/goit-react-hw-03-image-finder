import PropTypes from "prop-types";
import style from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGallertItem";


export default function ImageGallery({ images, onOpenModal }) {
  return (
    <ul className={style.imageGallery}>
      <ImageGalleryItem images={images} onOpenModal={onOpenModal} />
    </ul>
  );
}

ImageGallery.propTypes = {
  onOpenModal: PropTypes.func.isRequired
};