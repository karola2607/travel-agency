import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionNumber = (limits, currentValue, setOptionValue) => (
  <div className= {styles.number}>
    <input 
      type="number" 
      className={styles.inputSmall} 
      value={currentValue} 
      min={limits} 
      max={limits} 
      onChange={event => setOptionValue(event.currentTarget.value)}
    >

    </input>
  </div>
);

OrderOptionNumber.propTypes = {
  values: PropTypes.object,
  limits: PropTypes.object,
};

export default OrderOptionNumber;