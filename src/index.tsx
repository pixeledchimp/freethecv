import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {configureStore, applyMiddleware, Middleware} from '@reduxjs/toolkit'
import {AppState, rootReducer} from './store/store'
import { Provider } from 'react-redux'
import {RestoreState, SaveState} from "./helpers/SaveAndRestore";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const middleware: Middleware = api => next => action => {
    const response = next(action)
    const afterState = api.getState()
    SaveState(afterState)
    return response
}

const store = configureStore(
    { 
        reducer: rootReducer, 
        preloadedState: RestoreState() || {}, 
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(middleware);
        }
    })

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
