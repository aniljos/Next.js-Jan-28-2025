import { Customer } from "@/model/Customer";
import Link from "next/link";

type CustomerViewPageProps = {
    params: Promise< {id: number}>
}

export default async function CustomerViewPage(props: CustomerViewPageProps){

    const id = (await (props.params)).id
    const url = "http://localhost:9000/customers/" + id;
    const response = await fetch(url);
    const customer = await response.json() as Customer;

    return (
        <div>
            <h3>Customer View: {id}</h3>

            <div className="alert alert-secondary">
                {customer.name} is located at {customer.location}
            </div>

            <Link href="/customers">Back</Link>
        </div>
    )
}