import { Action, combineReducers, configureStore, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice"
import uiSlice from "./slices/uiSlice"
import likeSlice from "./slices/likeSlice"

const rootReducer = combineReducers({
     auth: authSlice,
     ui: uiSlice,
     like: likeSlice
})

const store = configureStore({
     reducer: rootReducer,
     middleware: (getDefaultMiddleware) => getDefaultMiddleware({
          serializableCheck: {
               ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
          }
     })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, Action> & typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>

export default store