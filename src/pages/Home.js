import { isError, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
  const { data, isLoading, isError } = useQuery(["id"], () => {
    return axios
      .get(
        "https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true"
      )
      .then((res) => res.data);
  });

  if (isError) {
    return <h1>Sorry, there was an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading ... </h1>;
  }
  return (
    <>
      <h1>this is Home page</h1>
      <p>{data?.name}</p>
    </>
  );
};
