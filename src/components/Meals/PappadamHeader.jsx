import { Fragment } from 'react';

import HeaderCartButton from '../Layout/HeaderCartButton';

import classes from '../Layout/Header.module.css';

const PappadamHeader = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Pappadam Food</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src='https://express.yassir.io/uploads/images/others/data[food_img]-1651678802671.jpeg' alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default PappadamHeader;