import { createStore } from 'redux';
import rootReducer from './Gallery/reducers'

const store = createStore(rootReducer);

export default store
