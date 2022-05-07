import React from "react";
import {BrowserRouter} from 'react-router-dom'
import {YMaps} from 'react-yandex-maps'

import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>

            <AppRouter />

    </BrowserRouter>
  );
}

export default App;
