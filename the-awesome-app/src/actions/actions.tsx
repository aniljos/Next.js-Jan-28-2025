'use server'
import { Supplier } from "@/model/Supplier";
import path from 'path';
import { promises as fs } from 'fs';
import { redirect } from "next/navigation";


//react server action
export async function sayHello(message: string) {
    return (
        <div>
            <p>Hello {message}</p>
        </div>
    );
}

export async function saveSupplier(prevForm: object, formData: FormData) {

    const supplier = {
        id: Number(formData.get("id")?.toString()),
        name: formData.get("name")?.toString(),
        contactPerson: formData.get("contact")?.toString(),
        email: formData.get("email")?.toString(),
        location: formData.get("location")?.toString(),
    }
    console.log("Saving supplier", supplier);

    if (supplier.id) {


        const filepath = path.join(process.cwd(), "src", "data", "suppliers.json");
        const fileContent = await fs.readFile(filepath, 'utf-8');
        const suppliers = JSON.parse(fileContent) as Supplier[];
        suppliers.push(supplier as Supplier);

        await fs.writeFile(filepath, JSON.stringify(suppliers, null, 2), 'utf-8');
        redirect("/suppliers");
        return {
            status: 0, message: "Success"
        }
    }
    else{
        return {
            status: 1, message: "Invalid supplier"
        }
    }

   
} 