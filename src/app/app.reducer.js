import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { tableReducer } from './redux/table/table.reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  router: routerReducer,
  table: tableReducer,
  form: formReducer,
});
