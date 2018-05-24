// React Libraries.
import React from 'react';
import { render } from 'react-dom';

// Redux Libraries.
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';

// Files.
import rootReducer from './reducers/index';

// CSS Library.
import 'font-awesome/css/font-awesome.css';
import './styles/app.less';

// Components.
import RegisterForm from './containers/RegisterForm';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <RegisterForm />
  </Provider>,
  document.getElementById('smava-app'),
);
