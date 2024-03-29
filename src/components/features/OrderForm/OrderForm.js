import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-flexbox-grid";
import OrderSummary from "../OrderSummary/OrderSummary";
import pricing from "../../../data/pricing.json";
import OrderOption from "../OrderOption/OrderOption";

const OrderForm = (props) => (
  <Row>
    {pricing.map((option) => {
      return (
        <Col md={4} key={option.id}>
          <OrderOption
            name={option.name}
            type={option.type}
            values={option.values}
            currentValue={option.id}
            setOrderOption={props.setOrderOption}
            limits={option.limits}
          />
        </Col>
      );
    })}
    <Col xs={12}>
      <OrderSummary cost={props.tripCost} options={props.options} />
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  tripOptions: PropTypes.object,
  cost: PropTypes.string,
  options: PropTypes.object,
  name: PropTypes.string,
  currentValue: PropTypes.string,
  setOrderOption: PropTypes.func,
  values: PropTypes.array,
  limits: PropTypes.object,
};

export default OrderForm;
