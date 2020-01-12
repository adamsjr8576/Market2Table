import { combineReducers } from 'redux';
import { addMarketsReducer } from '../reducers/addMarketsReducer';
import { addZipCodeReducer } from '../reducers/addZipCodeReducer';
import { controlFavoritesReducer } from '../reducers/controlFavoritesReducer';

const rootReducer = combineReducers({
  farmersMarkets: addMarketsReducer,
  zipCode: addZipCodeReducer,
  favorites: controlFavoritesReducer
})

export default rootReducer;
