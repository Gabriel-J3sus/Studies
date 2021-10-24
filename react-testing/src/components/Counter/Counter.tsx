import React, { useEffect, useState } from 'react';

export interface CounterProps {
  description: string;
  defaultCount: number;
}

export function Counter({ description, defaultCount }: CounterProps) {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1)
  const [bigEnough, setBigEnough] = useState(defaultCount >= 15);

  useEffect(() => {
    let id: NodeJS.Timeout;

    if (count >= 15) {
      id = setTimeout(() => setBigEnough(true), 300);
    }

    return function cleanup() {
      clearTimeout(id);
    };
  });

  // useEffect(() => {
  //   let active = true;

  //   if (count >= 15) {
  //     setTimeout(() => {
  //       if (active) {
  //         setBigEnough(true);
  //       }
  //     }, 300);
  //   }

  //   return function cleanup() {
  //     active = false;
  //   }
  // });
  
  return (
    <div>
      <h5>
        DESC: {description} - DC: {defaultCount}
      </h5>
      <label>
        Incrementor:
        <input value={incrementor} onChange={(e) => setIncrementor(parseInt(e.target.value) || 0)} type="number" />
      </label>

      <button
        aria-label="Subtract from Counter"
        onClick={() => setCount((prev) => prev - incrementor)}
      >
        -
      </button>
      Current Count: {count}
      <button 
        aria-label="Add to Counter" 
        onClick={() => setTimeout(() => setCount(count + incrementor), 200)}
      >
          +
      </button>
      {bigEnough ? null : <div>I am too small</div>}
    </div>
  );
}