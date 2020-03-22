import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Assets/css/circle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import rootReducer from "./Reducers/rootReducer";

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk), devTools
  )
);

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={3} className="snackbar">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SnackbarProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
