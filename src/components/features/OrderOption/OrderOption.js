import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';

const optionTypes = {
    dropdown: OrderOptionDropdown,
    icons: OrderOptionIcons,
    checkboxes: OrderOptionCheckboxes,
    number: OrderOptionNumber
};

const OrderOption = ({ name, type, currentValue, setOrderOption, ...otherProps }) => {
    const OptionComponent = optionTypes[type];
    if (!OptionComponent) {
        return null;
    } else {
        return (
            <div className={styles.component}>
                <h3 className={styles.title}>{name}</h3>
                <OptionComponent setOptionValue={value => setOrderOption({ [currentValue]: value })} {...otherProps} />
                {console.log(currentValue)}
            </div>
        );
    }
};

OrderOption.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    setOrderOption: PropTypes.func,
    setOptionValue: PropTypes.func,
    currentValue: PropTypes.string
};

export default OrderOption;
