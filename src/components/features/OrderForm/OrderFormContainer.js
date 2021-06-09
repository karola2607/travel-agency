import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';

const mapStateToProps = () => ({
  options: {getOrderOptions},
});
  
const mapDispatchToProps = (dispatch) => ({
  setOption: options => dispatch(setOrderOption({
    options,
  })),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
