"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);
  const [x, setX] = useState(1);
  // useEffect(function,dep_Array)

  const getData = async () => {
    try {
      
      console.log("object");
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setData(data);

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(
    () => {
  }, 
  
  []);


  useEffect(() => {
    console.log("Useeffect 2 called");
  });

  return (
    <div>
      <p>{x}</p>
      <button onClick={() => setX(x + 1)}>Update</button>
      {data.map((item: any) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
}
