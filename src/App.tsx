import React from "react";
import QueryClientProvider from "./components/common/provider/query-provier";

import Write from "./components/write";

function App() {
  return (
    <div className="App">
      <QueryClientProvider>
        <Write />
      </QueryClientProvider>
    </div>
  );
}

export default App;
