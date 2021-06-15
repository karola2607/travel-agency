import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

const OrderSummary = props => (
  <h2 className={styles.component}>
      Total:<strong>{formatPrice(calculateTotal(props.cost, props.options))}</strong>
    {console.log (props.options)}
  </h2>
);

OrderSummary.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;