'use client'
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";
import addEmployee, { State } from '../lib/actions';
import { InvoiceForm } from "../lib/defination";
import { useActionState } from "react";

export default function Form({ emp }: { emp: InvoiceForm[] }) {
    const initialState: State = { message: null, errors: {} };
    const [state, formAction] = useFormState(addEmployee, initialState);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        await formAction(formData);
    };

    return (
        <div className="">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Employee ID</label>
                    <div>
                        <input type="text" className="p-2 w-full mt-3" name="employeeid" required />
                        <div id="employeeerror" aria-live="polite" aria-atomic="true">
                            {state.errors?.employeeid &&
                                state.errors.employeeid.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                     <label> Employee Name</label>
                    <div>
                         <input type="text" className="mt-3 p-2 w-full" name="employeename" required/>
                         <div id="enamerror" aria-live="polite" aria-atomic="true">
                             {state.errors?.employeename &&
                            state.errors.employeename.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <label> Employee Address</label>
                    <div>
                        <input type="text" name="employeeaddress" className="mt-3 p-2 w-full border-red-900" required/>
                        <div id="empadd" aria-live="polite" aria-atomic="true">
                            {
                                state.errors?.employeeaddress?.map((error:string)=>(
                                    <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <label> Employee Salary</label>
                    <div>
                        <input type="text" name="employeesalary" className="mt-3 p-2 w-full border-red-900" required/>
                        <div id="empsal" aria-live="polite" aria-atomic="true">
                            {
                                state.errors?.employeesalary?.map((error:string)=>(
                                    <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <label> Employee EmailID</label>
                    <div>
                        <input type="text" className="mt-3 p-2 w-full" name="employeeemailid" required/>
                        <div id="empemail" aria-live="polite" aria-atomic="true">
                            {
                                state.errors?.employeeemailid?.map((error:string)=>(
                                    <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <label> Employee MobileNo</label>
                    <div>
                        <input type="text" className="mt-3 p-2 w-full" name="employeemobileno" required/>
                        <div id="empmobile" aria-live="polite" aria-atomic="true">
                            {
                                state.errors?.employeemobileno?.map((error:string)=>(
                                    <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
              
                <button type="submit" className="text-black bg-blue-400 px-12 py-2 mt-5">Submit</button>
                <button type="button" className="bg-red-400 px-12 py-2 mt-2 ms-4 text-black">
                    <Link href={'/Employee'}>Back</Link>
                </button>
            </form>
        </div>
    );
}
