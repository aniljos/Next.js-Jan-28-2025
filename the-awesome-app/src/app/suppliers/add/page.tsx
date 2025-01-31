'use client'
import { saveSupplier } from "@/actions/actions";
import { useActionState } from "react";

export default function AddSupplierPage(){

    const [state, formAction] =  useActionState(saveSupplier, {status:-1, message: "pending"})
    return (
        <div>
            <h3>Add Supplier</h3>

            <form action={formAction}>

                <div>
                    Status: {state.status}  --- Message: {state.message}
                </div>
                <div className="form-group">
                    <label htmlFor="id">Id</label>
                    <input className="form-control" type="number" id="id" name="id"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" id="name" name="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" type="text" id="email" name="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Contact</label>
                    <input className="form-control" type="text" id="contact" name="contact"/>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input className="form-control" type="text" id="location" name="location"/>
                </div>
                <br />
                <button className="btn btn-success">Save</button>

            </form>
        </div>
    )
}