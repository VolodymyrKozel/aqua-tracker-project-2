import clsx from 'clsx';
import css from './Loader.module.css';
import { Puff } from 'react-loader-spinner';
function Loader({ variant, className, height, width, color = '#fff' }) {
  return (
    <div className={clsx(css.container, css[variant], className)}>
      <Puff
        visible={true}
        height={height}
        width={width}
        color={color}
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
