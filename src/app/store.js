import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux'; //use for to combine
import storage from 'redux-persist/lib/storage'// uses localStorage

// Config for redux-persist
const persistConfig = {
  key: 'todo',
  storage,
};

// Combine all reducers
const rootReducer = combineReducers({
  reducer: todoReducer,
  // add more slices here
});


// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer:persistedReducer
})

export const persistor = persistStore(store);