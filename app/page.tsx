"use client"
import React, { useEffect, useState } from "react";
import CountButton from "./components/CountButton";
import SearchBar from "./components/SearchBar";

export default function Page() {
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProductsState(json));
  }, []);

  const hasProducts = productsState.length > 0;
  
  let content;
  if (hasProducts) {
    content = <SearchBar products={productsState} />;
  } else {
    content = 'Loading...';
  }

  return (
    <div>
      <h1>Counters</h1>
      <hr></hr>
      <CountButton incr={1} />
      <CountButton incr={2} />
      <h1>Repo</h1>
      <hr></hr>
      <a href="https://github.com/rjvs2002/Nodejs">My Github Repo</a>
      <h1>Store API</h1>
      <hr></hr>
      {content}
    </div>
  );
}