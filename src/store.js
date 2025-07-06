import { configureStore } from "@reduxjs/toolkit";
import findRideSlice from "./features/Ride/findRideSlice";
import chatReducer from './features/chat/chatSlice';

const store = configureStore({
    reducer:{
       findRide : findRideSlice,
       chat: chatReducer,
    }
}
)

export default store;