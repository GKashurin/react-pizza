import { combineReducers } from 'redux';

import filters from './filterReducer';
import pizzas from './pizzasReducer';
import cart from './basketReducer';

const rootReducer = combineReducers({
	filters,
	pizzas,
	cart,
});

export default rootReducer;