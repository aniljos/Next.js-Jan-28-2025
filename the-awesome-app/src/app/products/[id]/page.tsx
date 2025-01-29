'use client'

import { useParams } from "next/navigation"

export default function EditProductPage(){


    const params = useParams();
    const id = params.id;

    return (
        <div>
            <h3>Edit Product: {id}</h3>

            <form>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" />
                </div>

                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" className="form-control" id="desc" />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text" className="form-control" id="price" />
                </div>

                <br />
                <div>
                    <button className="btn btn-primary" >Save</button>&nbsp;
                    <button className="btn btn-info" >Cancel</button>
                </div>

            </form>
        </div>
    )
}