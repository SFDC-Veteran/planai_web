import React from "react";
import QueryClientProvider from "./components/common/provider/query-provier";
import Router from "./components/router";

function App() {
  return (
    <div className="App">
      <QueryClientProvider>
        <Router />
      </QueryClientProvider>
    </div>
  );
}

export default App;
