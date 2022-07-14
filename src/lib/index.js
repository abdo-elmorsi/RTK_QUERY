import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { AllApi } from "./slices/Api";

export const store = configureStore({
    reducer: {
        [AllApi.reducerPath]: AllApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(AllApi.middleware),
});

setupListeners(store.dispatch);
