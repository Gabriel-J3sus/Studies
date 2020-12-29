import React, { useState } from 'react';

function State() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(currentCount => currentCount + 1);
    }

    return (
        <>
            <h1>Count: {count}</h1>

            <button onClick={increment}>Increment</button>
        </>
    );
}

export default State;