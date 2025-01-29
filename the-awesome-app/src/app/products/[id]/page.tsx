'use client'

import { useParams } from "next/navigation"

export default function EditProductPage(){


    const params = useParams();
    const id = params.id;

    return (
        <div>
            <h3>Edit Product: {id}</h3>
        </div>
    )
}