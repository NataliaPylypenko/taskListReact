import {createStore} from "redux";
import {reducer} from "./reducer";
import {initialState} from "./db";
import {composeWithDevTools} from "redux-devtools-extension";


export const store = createStore(reducer, initialState, composeWithDevTools())

export type RootState = ReturnType<typeof reducer>