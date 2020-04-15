import { REMOVE_FEATURE, ADD_FEATURE_BACK } from "../actions";

const initialState = {
  additionalPrice: 0,
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const carFeaturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FEATURE: {
      return {
        ...state,
        additionalFeatures: state.additionalFeatures.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    }
    case ADD_FEATURE_BACK: {
      return {
        ...state,
        additionalFeatures: [...state.additionalFeatures, action.payload],
      };
    }

    default:
      return state;
  }
};
