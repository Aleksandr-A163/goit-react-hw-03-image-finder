import PropTypes from "prop-types";
import style from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGallertItem";


export default function ImageGallery({ images, onOpenModal }) {
  return (
    <ul className={style.imageGallery}>
       {images.map(({ id, webformatURL }) => (
         <ImageGalleryItem
           key={id}
           src={webformatURL}
           onOpenModal={onOpenModal} />
         ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  onOpenModal: PropTypes.func.isRequired
};