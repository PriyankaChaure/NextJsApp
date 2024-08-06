export default function Product()
{
  return <h1> Product page!!!</h1>;
}
// import { db } from "@vercel/postgres";

// export default async function handler(request, response)
// {
//   const client =await db.connect();

//   try{
//     await client.sql`CREATE TABLE EMPLOYEE(FirstName varchar(50), LastName varchar(50);)`;
//     const names = ['Priyanka','Chaure'];
//     await client.sql`INSERT INTO EMPLOYEE(FirstName, LastName) VALUES (${names[0]}, ${names[1]});`;
//   }
//   catch(error)
//   {
//     return response.status(500).json({error});
//   }
//   const EMPLOYEE = await client.sql`SELECT * FROM EMPLOYEE;`;
//   return response.status(200).json({EMPLOYEE});
// }

