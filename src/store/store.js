import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'todo-app',
    storage
}

const pReducer = persistReducer(persistConfig, todoReducer);

export default configureStore({
    reducer: {
        todos: pReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
