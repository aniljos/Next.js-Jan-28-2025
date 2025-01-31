'use client'

import { sayHello } from "@/actions/actions";
import { JSX, useRef, useState } from "react";

type SearchSupplierProps = {

    fetchSuppliers: (query: string) => Promise<JSX.Element>
}

export function SearchSupplier(props: SearchSupplierProps){

    const [query, setQuery] = useState("");
    const messageInputRef = useRef<HTMLInputElement>(null);
    const [sayHelloResultView, setSayHelloResultView] = useState<JSX.Element>();
    const [suppliersView, setSuppliersView] = useState<JSX.Element>()


    async function handleSearch(){


         const result = await props.fetchSuppliers(query);
         setSuppliersView(result);   


    }
    async function invokeSayHello(){
        if(messageInputRef.current?.value){
            const result =  await sayHello(messageInputRef.current?.value);
            //alert(result);
            setSayHelloResultView(result);
        }
    }

    return (
        <div>
            <div>
                <input ref={messageInputRef} type="text"  className="form-control" placeholder="Enter the Message"/>
                <button className="btn btn-primary" onClick={invokeSayHello}>Invoke SayHello</button>
                {sayHelloResultView ? <div className="alert alert-secondary">{sayHelloResultView}</div> : null}
            </div>

            <br />
            <input type="search" className="form-control" value={query} onChange={e => setQuery(e.target.value)}/>
            {query ? <div>Searching for {query}</div> : null}
            <br />
            <button className="btn btn-primary" onClick={handleSearch}>Search</button>


            <div>
                {suppliersView}
            </div>
        </div>
    )
}