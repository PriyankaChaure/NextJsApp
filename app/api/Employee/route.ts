import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE Employee ( 
            EmployeeId bigint,
            EmployeeName varchar(30),
            EmployeeAddress varchar(30),
            EmployeeSalary decimal(10,2),
            EmployeeEmailId varchar(20),
            EmployeeMobileNo varchar(10)
         );`;
     
    return NextResponse.json({ result }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

