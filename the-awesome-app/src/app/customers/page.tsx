import { Customer } from "@/model/Customer";
import Link from "next/link";
import { Suspense } from "react";
//import axios from "axios"
//import { cookies, headers } from "next/headers";


export default async function ListCustomersPage(){

    await new Promise(resolve => setTimeout(resolve, 5000));
    return (
        <div>
            <h3>List Customers</h3>
            <p>This page demonstrates the usage of suspense and streaming in RSC</p>

            <Suspense fallback={<div className="alert alert-warning"> Loading the first dataset...</div>}>
                <CustomersPage interval={10000}/>  
            </Suspense>

            <Suspense fallback={<div className="alert alert-primary"> Loading the second dataset...</div>}>
                <CustomersPage interval={5000}/>  
            </Suspense>
            
        </div>
    )
}

type CustomersPageProps = {
    interval: number
}
//SSR
//export const dynamic = "force-dymanic"
export async function CustomersPage(props: CustomersPageProps){

    await new Promise(resolve => setTimeout(resolve, props.interval));
    //SSR
    //(await cookies()).get("");
    //(await headers()).get("auth")
    const url = "http://localhost:9000/customers";
    //const response = await axios.get<Customer[]>(url);
    //const customers = response.data;
    //SSR
    const response  = await fetch(url, {cache: "no-cache"});       //fetch(url, {method: "GET"})
    const customers = await response.json() as Customer[];
    console.log("CustomersPage", customers);

    return (
        <div>
            <h3>Customers</h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => {
                        return (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td> <Link href={`/customers/${customer.id}`}>{customer.name}</Link> </td>
                                <td>{customer.location}</td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>

        </div>
    )

}