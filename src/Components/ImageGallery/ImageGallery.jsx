import PropTypes from "prop-types";
import style from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGallertItem";


export default function ImageGallery({ images, onOpenModal }) {
  return (
    <>
      {
        images.length !== 0 && <ul className={style.imageGallery}>
          {
            images.map(({ id, webformatURL, largeImageURL }) => (
              <li className={style.imageGalleryItem} key={id}>
                <ImageGalleryItem
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  openModal={onOpenModal} />
              </li>
            ))}
        </ul>
      }
    </>
  );
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onOpenModal: PropTypes.func,
};