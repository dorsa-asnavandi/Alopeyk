import {createStore} from 'redux'
import edibleReducer from './edible/edibleReducer';

const store = createStore(edibleReducer);

export default store;
