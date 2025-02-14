import { useState } from "react"

export const useCounter = (initialValue = 10, minValue = 0, maxValue =2000) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = () =>{
        if(counter >= maxValue) return;
        
        setCounter(counter + 1);
    };

    const decrement = () =>{
        if(counter === minValue) return;

        setCounter(counter - 1);
    };

    const reset = () =>{
        setCounter(initialValue);
    };

    return{
        counter,
        increment,
        decrement,
        reset,
    }
}