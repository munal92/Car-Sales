import { combineReducers } from "redux";

import { carFeaturesReducer } from "./carFeaturesReducer";

import { carsReducer } from "./carsReducer";

export default combineReducers({ carFeaturesReducer, carsReducer });
