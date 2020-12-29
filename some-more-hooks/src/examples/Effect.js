import React, { useState, useEffect } from 'react';

function Effect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count);
    }, [count])

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

export default Effect;