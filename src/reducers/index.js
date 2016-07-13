import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import journalReducer from './journal_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  journal: journalReducer
});

export default rootReducer;
