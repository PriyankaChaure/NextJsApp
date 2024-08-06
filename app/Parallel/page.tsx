

import { getStudent } from "../lib/data";
import { getPets } from "../lib/data";
import Pets from '../Pets/page';
export default async function PetDetails() {
    const postpets = getPets();
    const poststudent = getStudent();
    //const studentDetails = await getStudent();
    const[pets,student] = await Promise.all([postpets,poststudent]);
   

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
                        student.map((student, index) => (
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
          <Pets />
        </div>
      </>
       
    );
}