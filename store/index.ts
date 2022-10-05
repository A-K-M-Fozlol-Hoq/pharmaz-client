import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterSlice"
import userReducer from "./userSlice"
import { combineReducers } from "redux"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
import { setupListeners } from '@reduxjs/toolkit/query'
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

const persistConfig = {
	key: "root",
	// version: 2,
	storage,
	// blacklist: ['user'], //black list form persist config
	debug:true
}

const rootReducer = combineReducers({
	counter: counterReducer,
    user:userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
// 	reducer: persistedReducer,	
// })

export const store = configureStore({
	// reducer: rootReducer,
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
	  getDefaultMiddleware({ serializableCheck: false }),
  });
  

setupListeners(store.dispatch)