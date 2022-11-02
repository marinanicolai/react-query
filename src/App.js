import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";

function App() {
  const queryInfo = useQuery("pokemon", () =>
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.data.results)
  );

  return (
    <div>
      <QueryClientProvider>
        {queryInfo.data?.map((result) => {
          return <div key={result.name}>{result.name}</div>;
        })}
      </QueryClientProvider>
    </div>
  );
}

export default App;
