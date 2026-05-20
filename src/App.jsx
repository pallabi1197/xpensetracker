import React, { useState } from "react";
import { SnackbarProvider } from 'notistack'
import { Home } from "./pages/Home/Home";


function App() {
  useState
  return (
   <SnackbarProvider>
    <div>
      <Home/>
    </div>
   </SnackbarProvider>
  );
}

export default App;
