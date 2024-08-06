
import { sql } from '@vercel/postgres'; 
import { NextResponse } from 'next/server';
const ITEMS_PER_PAGE = 3;

export async function getEmps()
 {  
    const ITEMS_PER_PAGE =3;
    const result1 = await sql `SELECT * FROM employee ORDER BY employeeid ASC;`;
     return result1.rows;
}
export async function getPets()
 {
   await new Promise((resolve) => setTimeout(resolve, 5000));
    const result2 = await sql `SELECT * FROM Pets;`;
    return result2.rows;
}
export async function getStudent()
 {
   await new Promise((resolve) => setTimeout(resolve, 5000));
    const result3 = await sql `SELECT * FROM Student;`;
    return result3.rows;
}

export async function fetchemp(query:string, currentpage:number,) {
  try
  {
     const invoice = await sql`SELECT * FROM employee where employeename ILIKE ${`%${query}%`} ;`;
     return invoice.rows;
  }
  catch(error){
    return NextResponse.json({error},{status:500});
  }
}


export async function fetchInvoicesPages(query:string){
  const ITEMS_PER_PAGE =3;
  try{
      const count = await sql `
      SELECT * FROM Employee where employeename ILIKE ${`%${query}%`};`;

      const totalpages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
      return totalpages;
  }catch(error){
      return NextResponse.json({error},{status:500});
  }
}



export async function fetchFiltered(query:string, currentPage:number,){
  const ITEMS_PER_PAGE =3;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try{
      await new Promise((resolve)=> setTimeout(resolve,5000));
      const invoices = await sql `
          SELECT * FROM employee where employeename ILIKE ${`%${query}%`}
          
          LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      ;`;

      return invoices.rows
  }catch(error){
      console.log("Error : ",error);
  }
}

export async function fetchInvoiceById(id:string){
  try
  {
      const data = await sql `SELECT * FROM employee WHERE employeeid = ${id};`;
      return data.rows[0];
  }
  catch(error)
  {
      console.log(error);
  }
}