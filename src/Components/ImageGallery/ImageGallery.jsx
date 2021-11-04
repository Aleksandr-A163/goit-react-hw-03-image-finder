import PropTypes from "prop-types";
import style from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGallertItem";


export default function ImageGallery({ images = [], onOpenModal }) {
  return (
    <>
      {
        images.length !== 0 && <ul className={style.imageGallery}>
          {
            images.map(image => (
              <li className={style.imageGalleryItem} key={image.id}>
                <ImageGalleryItem image={image} openModal={onOpenModal}/>
              </li>
            ))}
        </ul>
      }
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  onOpenModal: PropTypes.func,
};