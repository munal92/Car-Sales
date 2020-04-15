export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADD_FEATURE_BACK = "ADD_FEATURE_BACK";
export const REMOVE_FEATURE_BACK = "REMOVE_FEATURE_BACK";

export function addFeature(carFeature) {
  return {
    type: ADD_FEATURE,
    payload: carFeature,
  };
}
export function addFeatureBack(carFeature) {
  return {
    type: ADD_FEATURE_BACK,
    payload: carFeature,
  };
}

export const removeFeature = (feature) => {
  return {
    type: REMOVE_FEATURE,
    payload: feature,
  };
};

export const removeFeatureBack = (feature) => {
  return {
    type: REMOVE_FEATURE_BACK,
    payload: feature,
  };
};
