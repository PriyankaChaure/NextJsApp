
import Search from "./Search";
import Link from "next/link";
import { fetchFiltered } from "../lib/data";
import { fetchemp, getEmps } from "../lib/data";
import { UpdateInvoice } from "./update";
import { DeleteDetails } from "./delete";

export default async function EmpDet(
    {
        query,
        currentPage,
    }:
    {
            query: string,
            currentPage:number,

    }
) 
{
    const emp = await fetchFiltered(query,currentPage);
    
    return (
        <>
        <div>
        <div className="mt-8">
                <Link href={'/Employee/create'} className="text-black bg-green-200 mt-10 focus:outline-none focus:ring-4 focus:ring-lime-200 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">ADD RECORD</Link>
            </div>
            
            <div>
                <Search/>
            </div>
            
            
        </div>
        <div className="bg-black justify-center flex mt-8">
          
            <table className="w-full bg-green-50 text-center">
                <thead className="bg-lime-200 text-black">
                    <tr>
                        <th className="py-3 px-2">Employee ID</th>
                        <th className="py-3 px-2">Employee Name</th>
                        <th className="py-3 px-2">Employee Address</th>
                        <th className="py-3 px-2">Employee Salary</th>
                        <th className="py-3 px-2">Employee EmailID</th>
                        <th className="py-3 px-2">Employee MobileNo </th>
                        <th className="py-3 px-2">Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        emp.map((employee, index) => (
                            <tr key={index}>
                                <td className="py-3 px-2">{employee.employeeid}</td>
                                <td className="py-3 px-2">{employee.employeename}</td>
                                <td className="py-3 px-2">{employee.employeeaddress}</td>
                                <td className="py-3 px-2">{employee.employeesalary}</td>
                                <td className="py-3 px-2">{employee.employeeemailid}</td>
                                <td className="py-3 px-2">{employee.employeemobileno}</td>
                                <td className="py-3 px-2 flex justify-center items-center">
                                    <UpdateInvoice id={employee.employeeid}/> 
                                    | 
                                    <DeleteDetails id={employee.employeeid}/> 
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </>
    );
}

