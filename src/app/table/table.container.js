import { connect } from 'react-redux';
import get from 'lodash/get';
import { deleteElement, fetchList } from '../redux/table/table.actions';
import TableComponent from './table.component';

const mapStateToProps = state => ({
  data: get(state, 'table.data', []),
});

const mapDispatchToProps = dispatch => ({
  fetchList: () => dispatch(fetchList()),
  deleteElement: elementId => dispatch(deleteElement(elementId)),
});

export const TableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableComponent);
