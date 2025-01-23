import { useState } from "react"



const useCounter = ( initialValue = 10 ) => {

    
    const [counter, setCounter] = useState(initialValue);

    const substract = () =>  counter === 0 ? null : setCounter(counter - 1);
    const add = () => setCounter(counter + 1);
    const reset = () => setCounter(initialValue);
    
    
    return {
        counter,
        add,
        substract,
        reset
    }

}

export default useCounter;