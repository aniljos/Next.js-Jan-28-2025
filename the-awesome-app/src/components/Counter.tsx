'use client'

import { MouseEvent } from "react";

type CounterProps = {
    initialValue: number
}

export function Counter(props: CounterProps){

    let counter = props.initialValue;
    function inc(evt: MouseEvent<HTMLButtonElement>){

        //console.log("inc invoked..", evt);
        //props.initialValue++; // read-only
        counter++;
        console.log("counter", counter);
    }
    return (
        <div>
            <h4>Counter : {counter}</h4>
            <div>
                <button onClick={inc}>Inc</button> &nbsp;
                <button>Decr</button>
            </div>
        </div>
    )
}