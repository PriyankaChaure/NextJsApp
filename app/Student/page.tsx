

import { Suspense } from "react";
import { getStudent } from "../lib/data";
import Pets from '../Pets/page';
export default async function PetDetails() {
   
    const studentDetails = await getStudent();

   

    return (
        <>
        <div className="bg-black justify-center flex mt-8">
            <table className="w-full bg-green-50 text-center">
                <thead className="bg-lime-200 text-black">
                    <tr>
                        <th className="py-3 px-2">Student ID</th>
                        <th className="py-3 px-2">Student Name</th>
                        <th className="py-3 px-2">Department</th>
                        <th className="py-3 px-2">Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentDetails.map((student, index) => (
                            <tr key={index}>
                                <td className="py-3 px-2">{student.studenid}</td>
                                <td className="py-3 px-2">{student.studentname}</td>
                                <td className="py-3 px-2">{student.department}</td>
                                <td className="py-3 px-2">{student.marks}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        <div>
            <Suspense fallback={<div className="text-center">Pet Data Loading...</div>}>
                <Pets/>
            </Suspense>
        </div>
        </>
    );
}


