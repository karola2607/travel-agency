import React from 'react';
import { formatPrice } from '../../../utils/formatPrice';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';


const OrderOptionIcons = ({values, required, setOptionValue}) => (
  <div 
    className={styles.icon}
  >
    {required ? '' : (
      <i className="fas fa-times-circle">none</i>
    )}
    {values.map(value => (
      <div 
        className={styles.icon} 
        activeClassName={styles.isActive} 
        key={value.id} 
        onClick={value => setOptionValue(value.id)}
      >
        <Icon 
          name={value.name}
        />
        {value.name}
        {formatPrice(value.price)}
      </div>
    ))}
  </div>
);


OrderOptionIcons.propTypes = {
  values: PropTypes.object,
  required: PropTypes.node,
  setOptionValue: PropTypes.func,
};


export default OrderOptionIcons;