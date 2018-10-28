import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {tableReducer} from "./redux/table/table.reducer";

export default combineReducers({
    router: routerReducer,
    table: tableReducer,
})