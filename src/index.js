import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//::::::::::::::::::::::::::::::::::::::::
//STEP 3: 
import { createStore , applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { reducer } from './state/reducer'


//STEP 4: 
const store = createStore(reducer, applyMiddleware(thunk));


//STEP 5: provider store={store}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
