import { NextResponse } from "next/server";
import path from 'path';
import { promises as fs } from 'fs';
import { Supplier } from "@/model/Supplier";



//GET http://localhost:3000/api/suppliers
export async function GET(request: Request) {

    try {


        const url = new URL(request.url);
        const query = url.searchParams.get("query")

        //Database, Filesystem, message queue
        const filepath = path.join(process.cwd(), "src", "data", "suppliers.json");
        const fileContent = await fs.readFile(filepath, 'utf-8');
        const suppliers = JSON.parse(fileContent) as Supplier[];

        if (query) {
            const filteredSuppliers = suppliers.filter(item => item.name.toLowerCase().includes(query.toLowerCase())
                || item.location.toLowerCase().includes(query.toLowerCase())
                || item.contactPerson.toLowerCase().includes(query.toLowerCase())
                || item.email.toLowerCase().includes(query.toLowerCase()));
            return NextResponse.json(filteredSuppliers);
        }

        return NextResponse.json(suppliers);

    } catch (error) {
        console.log("error", error);
        return NextResponse.error();
    }
}

//POST http://localhost:3000/api/suppliers
export async function POST(request: Request) {

    try {
        
        const supplier  = await request.json() as Supplier;
        if(supplier){
            const filepath = path.join(process.cwd(), "src", "data", "suppliers.json");
            const fileContent = await fs.readFile(filepath, 'utf-8');
            const suppliers = JSON.parse(fileContent) as Supplier[];

            suppliers.push(supplier);
             await fs.writeFile(filepath, JSON.stringify(suppliers, null, 2), 'utf-8');
             return NextResponse.json({message: "saved"})
        }
        else{
            return NextResponse.json({message: "validation failed"}, {status: 400})
        }



    } catch (error) {
        console.log(error);
        return NextResponse.error();
    }
}

//PUT
//DELETE

