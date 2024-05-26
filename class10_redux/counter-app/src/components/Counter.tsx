"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incVal,
  decVal,
} from "@/redux/counterSlice/counterSlice";
export default function Counter() {
  const counter = useSelector((state: any) => state.counter);
  const [input, setInput] = useState(0);
  const dispatch = useDispatch();
  console.log(counter);

  // const handlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInput(Number(e.target.value));
  // };
  return (
    <main className="w-screen h-screen">
      <div className="flex flex-col gap-y-8 mt-8">
        <h1 className="text-3xl font-bold uppercase text-center">Counter</h1>
        <div className="flex items-end justify-center gap-x-4">
          <button
            onClick={() => dispatch(decrement())}
            className="bg-teal-500 text-sm tex-slate-100 font-bold px-2 rounded "
          >
            -
          </button>

          <span className="block text-5xl font-bold">{counter}</span>
          <button
            onClick={() => dispatch(increment())}
            className="bg-teal-500 text-sm tex-slate-100 font-bold px-2 rounded "
          >
            +
          </button>
        </div>

        {/* other operations */}
        <div className="flex justify-center items-center gap-x-2">
          <button
            onClick={() => dispatch(incVal(input))}
            className="bg-blue-700 text-sm rounded px-3 py-1 text-slate-100"
          >
            Inc. Value
          </button>
          <input
            onChange={(e) => {
              setInput(Number(e.target.value));
            }}
            type="text"
            value={input}
            className="block w-20 text-center px-2 border-2 rounded-md font-bold focus:border-teal-500  "
          />
          <button
            onClick={() => dispatch(decVal(input))}
            className="bg-red-700 text-sm rounded px-3 py-1 text-slate-100"
          >
            Dec. Value
          </button>
          <button className="bg-green-700 text-sm rounded px-3 py-1 text-slate-100">
            Add Async
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="bg-yellow-500 text-sm rounded px-3 py-1 text-slate-100"
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}
