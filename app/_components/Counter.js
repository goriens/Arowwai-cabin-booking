"use client";
import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);
  console.log(users);

  return (
    <>
      <p>There are - {users.length} users</p>
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </>
  );
}
