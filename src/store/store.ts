import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./github/github.api";
import { githubReducer } from "./reducers/github.slice";

export const rootReducer = combineReducers({
  [githubApi.reducerPath]: githubApi.reducer,
  githubReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(githubApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

