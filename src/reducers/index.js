import {combineReducers} from "redux";
import {reducer as reduxFormReducer} from 'redux-form';
import book from './book';

export default combineReducers({
    book,
    form: reduxFormReducer
})
