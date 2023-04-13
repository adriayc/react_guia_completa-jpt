// Importar redux
// import { createStore, applyMiddleware, compose } from 'redux';    // Deprecado!
// import thunk from 'redux-thunk';    // Deprecado!
import { configureStore } from '@reduxjs/toolkit';
// Importar reducers
import reducer from './reducers';

// Deprecado!
// const store = createStore(
//   reducer,
//   compose(applyMiddleware(thunk),
//     typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
//   )
// );

const store = configureStore({
  reducer,
});

export default store;