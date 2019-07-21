import { Provider } from 'react-redux';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store/configureStore';

import AppNavigator from './containers/auth/login';
import AxiosUtils from './services/interceptors';


AxiosUtils.applyInterceptors(store);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppNavigator />
    </PersistGate>
  </Provider>
);

export default App;
