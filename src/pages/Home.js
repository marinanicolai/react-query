import { isError, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useAsyncMutation } from "../hooks/useAsyncMutation";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Home = () => {
  // const [coin, setCoin] = useState("");
  const { coin } = useParams();

  const { data, isLoading, isError } = useQuery(["id", coin], () => {
    return axios
      .get(
        "https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true"
      )
      .then((res) => res.data);
  });
  //   const fetchTodos = (id) => {
  //     return axios
  //       .get(
  //         "https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true"
  //       )
  //       .then((res) => res.data);
  //   };

  //   const query = useQuery({ queryKey: ["todos"], queryFn: fetchTodos });

  console.log(data);

  const plainMutate = useAsyncMutation(() => {
    alert("clicked");
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
      <form>
        <button onClick={() => plainMutate()}>Run plain Mutation</button>
        <input placeholder="Search the coin" ></input>
        <Link to="/coin">
          <button>Update the coin</button>
        </Link>
      </form>
    </>
  );
};
