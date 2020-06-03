import { createStore } from 'redux';

import rootReducer from './ducks/reducers';

const store = createStore(rootReducer);

export default store;