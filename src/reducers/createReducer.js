
const basicReducerHandler = action => action.data;

const createReducer = (code, defaultState, dataGetter = basicReducerHandler) => {
  return (state = defaultState, action) => {
    const isMatchingAction = action.type === code;
    return isMatchingAction ? dataGetter(action, state) : state;
  }
}

export default createReducer;
