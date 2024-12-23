import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice"

const rootReducer = combineReducers({

     auth: authSlice
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
export type AppDispatch = typeof store.dispatch

export default store