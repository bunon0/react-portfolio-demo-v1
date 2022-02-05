import { requestStates } from "../utils/constant";

export const actionTypes = {
  initial: {},
  fetch: {},
  success: {},
  error: {},
};

export const initialState: {
  languageList: [];
  requestState: string;
} = {
  languageList: [],
  requestState: requestStates.idle,
};

export const skillReducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.initial: {
      return {
        languageList: [],
        requestState: requestStates.idle,
      };
    }
    case actionTypes.fetch: {
      return {
        ...state,
        requestStates: requestStates.loading,
      };
    }
    case actionTypes.success: {
      return {
        languageList: action.payload.languageList,
        requestStates: requestStates.success,
      };
    }
    case actionTypes.error: {
      return {
        languageList: [],
        requestStates: requestStates.error,
      };
    }
    default: {
      throw new Error();
    }
  }
};
