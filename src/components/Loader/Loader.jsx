import { Bars } from 'react-loader-spinner';

import css from './Loader.module.css';
const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <Bars
        height='80'
        width='80'
        color='#2f47b1'
        ariaLabel='bars-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
    </div>
  );
};

export default Loader;