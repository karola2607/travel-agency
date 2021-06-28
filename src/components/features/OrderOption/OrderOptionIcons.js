import React from 'react';
import { formatPrice } from '../../../utils/formatPrice';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';


const OrderOptionIcons = ({values, required, setOptionValue}) => (
  <div 
    className={styles.icon}
  >
    <div>
      {required ? '' : (
        <i className="fas fa-times-circle">none</i>
      )}
    </div>
    {values.map(value => (
      <div 
        className={styles.icon}
        key={value.id} 
        onClick={() => setOptionValue(value.id)}
      >
        <Icon 
          name={value.icon}
        />
        {value.name}
        ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);


OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.node,
  setOptionValue: PropTypes.func,
};


export default OrderOptionIcons;