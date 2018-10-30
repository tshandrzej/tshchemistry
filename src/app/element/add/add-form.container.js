import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import FormComponent from '../form/form.component';
import {addElement} from "../../redux/table/table.actions";

const mapStateToProps = state => ({
  form: 'element-edit',
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: values => dispatch(addElement(values, ownProps.elementId)),
});

export const AddFormContainer = compose(connect(mapStateToProps, mapDispatchToProps), reduxForm())(
  FormComponent
);
