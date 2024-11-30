import React, {useState} from "react";

function Count() {

    const [num, setCount] = useState(0);
   
    const increment = () => {
        setCount(num+1);
    }

    const decrement = () => {
        setCount(num-1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className="container">
            <p className="count"> {num} </p>
            <button className="count-button" onClick={decrement} >Decrement</button>
            <button className="count-button" onClick={reset}>Reset</button>
            <button className="count-button" onClick={increment}>Increment</button>
        </div>
    );
}

export default Count
