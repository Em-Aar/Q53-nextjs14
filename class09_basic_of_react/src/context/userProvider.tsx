"use client";
import React from "react";
import { userContext } from "./userContext";

export default function userProvider({ children, data }: any) {
  return (
    <div>
      <userContext.Provider value={data}>{children}</userContext.Provider>
    </div>
  );
}
