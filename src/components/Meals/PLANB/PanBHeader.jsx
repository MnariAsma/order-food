import { Fragment } from 'react';

import HeaderCartButton from '../../Layout/HeaderCartButton';

import classes from '../../Layout/Header.module.css';

const PlanBHeader = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Plan B Food</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7zoOYmxRM8cpiS6CH9_4pYC47aGZ9f_976eQ9btrekV7XLViJ' alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default PlanBHeader;