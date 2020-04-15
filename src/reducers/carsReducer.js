import { ADD_FEATURE, REMOVE_FEATURE_BACK } from "./../actions";

const initialState = {
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
};

export const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE: {
      return {
        ...state,
        car: {
          ...state.car,
          price: state.car.price + action.payload.price,
          features: [...state.car.features, action.payload],
        },
      };
    }
    case REMOVE_FEATURE_BACK: {
      return {
        ...state,
        car: {
          ...state.car,
          price: state.car.price - action.payload.price,
          features: state.car.features.filter(
            (item) => item.id !== action.payload.id
          ),
        },
      };
    }

    default:
      return state;
  }
};
