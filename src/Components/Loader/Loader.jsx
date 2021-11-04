import LoaderSpinner from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import style from "./Loader.module.css";

const Loader = () => (
	<div className={style.Loader}>
        <LoaderSpinner 
            type="ThreeDots"
            color="pink"
            height={100}
            width={100}
            timeout={10000} />
	</div>
);

export default Loader;
