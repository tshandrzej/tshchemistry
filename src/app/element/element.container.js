import { connect } from 'react-redux';
import get from 'lodash/get';
import { fetchElement } from '../redux/table/table.actions';
import ElementComponent from './element.component';

const mapStateToProps = state => ({
  data: get(state, 'table.data', []),
});

const mapDispatchToProps = (dispatch) => ({
  fetchElement: elementId => dispatch(fetchElement(elementId)),
});

export const ElementContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ElementComponent);
