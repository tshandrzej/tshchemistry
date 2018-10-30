import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import FormComponent from '../form/form.component';
import {editElement} from "../../redux/table/table.actions";
import {get} from 'lodash'

const mapStateToProps = state => ({
  form: 'element-edit',
  initialValues: get(state, 'table.element', ''),

  enableReinitialize: true,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: values => dispatch(editElement(values, 1)),
});

export const EditFormContainer = compose(connect(mapStateToProps, mapDispatchToProps), reduxForm())(
  FormComponent
);
