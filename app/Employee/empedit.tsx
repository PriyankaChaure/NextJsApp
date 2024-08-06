'use client'
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";
import  { State, updateEmployee } from "../lib/actions";
import { InvoiceForm,customer } from "../lib/defination";

export default function Form(
    {
        invoice,
        customers,
    }:
    {
        invoice:InvoiceForm,
        customers:customer[];
    }){

   const initialstate: State={message:null, errors:{}};
     const updateDetailsWithID = updateEmployee.bind(null, invoice.employeeid);

    return (
        <form action={updateDetailsWithID}>
            <div>
                <label> Employee ID</label>
                <div className="mt-3">
                    <input readOnly  type="text" className="p-2 w-full" name="employeeid" defaultValue={invoice.employeeid}/>
                </div>
            </div>
            
            <div className="mt-3">
                <label> Employee Name</label>
                <div className="mt-3">
                    <input type="text" className="p-2 w-full" name="employeename" defaultValue={invoice.employeename}/>
                </div>
            </div>

            <div className="mt-3">
                <label> Employee Address</label>
                <div className="mt-3">
                    <input type="text" name="employeeaddress" className="p-2 w-full" defaultValue={invoice.employeeaddress}/>
                </div>
            </div>

            <div className="mt-3">
                <label> Employee Salary</label>
                <div className="mt-3">
                    <input type="text" className="p-2 w-full" name="employeesalary" defaultValue={invoice.employeesalary}/>
                </div>
            </div>
            <div className="mt-3">
                 <label> Employee EmailID</label>
                <div className="mt-3">
                    <input type="text" name="employeeemailid" className="p-2 w-full" defaultValue={invoice.employeeemailid}/>
                 </div>
             </div>

             <div className="mt-3">
                 <label> Employee MobileNo</label>
                 <div className="mt-3">
                     <input type="text" className="p-2 w-full" name="employeemobileno" defaultValue={invoice.employeemobileno}/>
                 </div>
             </div>
            <button type="submit" className="text-black bg-blue-400 px-12 py-2 mt-5">Update</button>
            <button type="button" className="bg-red-400 px-12 py-2 mt-2 ms-4 text-black"><Link href={'/Employee'}>Back</Link></button>
        </form>
    );
}


