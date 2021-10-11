import store from "./store";

export const persistToken = store => next => action => {

  switch(action.type) {

    case ON_INIT:
      break;

    case RECEIVE_TOKEN:
      break;

  }

  return next(action);
};