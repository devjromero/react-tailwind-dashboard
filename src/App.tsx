import React, {useState, Suspense, useEffect} from 'react';

import AppRouter from "./AppRouter";
import store from "./features/common/redux/store";

import {Provider} from "react-redux";
function App() {
    return (
        <Provider store={store}>
           <AppRouter/>
        </Provider>
    );
}

export default App;
