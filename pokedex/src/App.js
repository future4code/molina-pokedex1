
import React from "react"
import { Router } from "../src/route/Router"
import GlobalState from "./global/GlobalState.jsx"

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
