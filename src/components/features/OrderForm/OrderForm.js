import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = (props, {setOrderOption}) => (
  <Row>
    {pricing.map(option => {
      return(
        <Col md={4} key={option.id}>
          <OrderOption 
            name={option.name} 
            type={option.type} 
            currentValue={option.id} 
            setOrderOption={setOrderOption}
          />
        </Col> 
      );}
    )}
    <Col xs={12}>
      <OrderSummary 
        cost={props.tripCost} 
        options={props.options}
      />
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  tripOptions: PropTypes.object,
  cost: PropTypes.string,
  options: PropTypes.object,
  name: PropTypes.string,
  setOrderOption: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderForm;