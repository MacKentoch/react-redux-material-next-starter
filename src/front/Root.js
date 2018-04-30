// @flow

// #region imports
import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import withMainLayout from './hoc/withMainLayout';
import MainRoutes from './routes/MainRoutes';
import fadeIn from './style/animations/fadeIn';
import configureStore from './redux/store/configureStore';
import { history } from './redux/store/configureStore';
// #endregion

// #region style (global styles)
const styles = theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    body: {
      margin: 0,
    },
    ...fadeIn,
  },
});
// #endregion

// #region constants
const App = compose(withStyles(styles), withMainLayout())(MainRoutes);
const store = configureStore();
// #endregion

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Root;
