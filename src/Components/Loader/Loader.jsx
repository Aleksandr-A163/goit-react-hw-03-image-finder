import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import style from "./Loader.module.css";

const LoaderSpinner = () => (
	<div className={style.Loader}>
        <Loader
            type="ThreeDots"
            color="blue"
            height={100}
            width={100}
            timeout={10000} />
	</div>
);

export default LoaderSpinner;