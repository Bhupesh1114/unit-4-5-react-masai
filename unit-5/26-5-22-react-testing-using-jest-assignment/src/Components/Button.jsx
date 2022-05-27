import React, { useState } from "react";

const Button = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button data-testid="add" onClick={() => setCounter((counter) => counter + 5)}>Add</button>
            <button data-testid="reduce" onClick={() => setCounter((counter) => counter - 5)}>Reduce</button>
        </div>
    )
}

export default Button;