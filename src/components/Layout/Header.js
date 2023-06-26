import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Available Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src='https://express.yassir.io/uploads/images/others/data[food_img]-1651678802671.jpeg' alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
