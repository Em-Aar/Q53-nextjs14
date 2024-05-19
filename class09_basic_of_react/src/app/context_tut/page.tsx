"use client";
import { userContext } from "@/context/userContext";
import { useContext } from "react";
import UserProvider from "@/context/userProvider";

function Component2() {
  const value = useContext(userContext);
  return <h1>Component2:{value}</h1>;
}

function Component1() {
  const value = useContext(userContext);
  return (
    <>
        <UserProvider data={2}>
        <Component2 />
        </UserProvider>


      <h1>Component1:{value}</h1>
    </>
  );
}

export default function page() {
  return (
    <div>
      userContext.
      <Component1 />
    </div>
  );
}

// useCustomHook