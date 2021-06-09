import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = props => (
  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={props.cost} tripOptions={props.options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;