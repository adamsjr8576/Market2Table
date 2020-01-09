import { combineReducers } from 'redux';
import { addMarketsReducer } from '../reducers/addMarketsReducer';
import { addZipCodeReducer } from '../reducers/addZipCodeReducer';

const rootReducer = combineReducers({
  farmersMarkets: addMarketsReducer,
  zipCode: addZipCodeReducer
})

export default rootReducer;
