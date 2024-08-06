

import { getPets } from "../lib/data";

export default async function PetDetails() {
   
    const petDetails = await getPets();

   

    return (
        <div className="bg-black justify-center flex mt-8">
            <table className="w-full bg-green-50 text-center">
                <thead className="bg-lime-200 text-black">
                    <tr>
                        <th className="py-3 px-2">Pet Name</th>
                        <th className="py-3 px-2">Owner Name</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        petDetails.map((pet, index) => (
                            <tr key={index}>
                                <td className="py-3 px-2">{pet.name}</td>
                                <td className="py-3 px-2">{pet.owner}</td>
                                
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}


