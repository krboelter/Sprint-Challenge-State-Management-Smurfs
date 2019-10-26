import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import "./index.css";
import App from "./components/App";

import { reducer as fetchSmurfReducer } from './components/reducers/fetchSmurfs';

const rootReducer = combineReducers({
    smurfs: fetchSmurfReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));
