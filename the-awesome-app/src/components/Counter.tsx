'use client'

import { MouseEvent, useEffect, useState } from "react";
import { Message } from "./Message";

type CounterProps = {
    initialValue: number
}

export function Counter(props: CounterProps) {

    //let counter = props.initialValue;
    const [counter, setCounter] = useState(props.initialValue);

    useEffect(() => {
        
        console.log("[Counter] useEffect", counter);

    }, [counter])

    function inc(evt: MouseEvent<HTMLButtonElement>) {

        //console.log("inc invoked..", evt);
        //props.initialValue++; // read-only
        // setCounter(counter + 1);
        // setCounter(counter + 1);

        //setCounter(currentCount => currentCount + 1);
        // setCounter(function(currentCount){
        //     return currentCount + 1;
        // });
        setCounter(currentCount => currentCount + 1);
        //console.log("counter", counter);
    }

    function decr() {
        setCounter(counter - 1);
    }
    return (
        <div>
            <h4>Counter : {counter}</h4>
            <div>
                <button onClick={inc}>Inc</button> &nbsp;
                <button onClick={decr}>Decr</button>
            </div>
            {/* Conditional rendering */}
            {counter > 5 ? <Message text={`Counter: ${counter} `} color="red"/> : null}
        </div>
    )
}