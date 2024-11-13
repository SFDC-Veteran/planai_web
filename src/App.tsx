import React from "react";
import QueryClientProvider from "./components/common/provider/query-provier";
import Route from "src/components/router";

function App() {
  return (
    <div className="App">
      <QueryClientProvider>
        <Route />
      </QueryClientProvider>
    </div>
  );
}

export default App;
