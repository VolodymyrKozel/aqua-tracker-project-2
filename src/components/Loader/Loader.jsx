import css from './Loader.module.css';
import { Puff } from 'react-loader-spinner';
function Loader() {
  return (
    <div className={css.container}>
      <Puff
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
