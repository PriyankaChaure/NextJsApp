import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const employeeId = searchParams.get('employeeId');
  const employeeName = searchParams.get('employeeName');
  const employeeAddress = searchParams.get('employeeAddress');
  const employeeSalary = searchParams.get('employeeSalary');
  const employeeEmailId = searchParams.get('employeeEmailId');
  const employeeMobileNo = searchParams.get('employeeMobileNo');
 
  try {
    if (employeeId|| !employeeName|| !employeeAddress|| !employeeSalary|| !employeeEmailId|| !employeeMobileNo) throw new Error('Enter correct details!!');
    await sql`INSERT INTO Employee(EmployeeId, EmployeeName, EmployeeAddress, EmployeeSalary, EmployeeEmailId, EmployeeMobileNo) VALUES (${employeeId},${employeeName}, ${employeeAddress},${employeeSalary}, ${employeeEmailId}, ${employeeMobileNo});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const emp = await sql`SELECT * FROM Employee;`;
  return NextResponse.json({ emp }, { status: 200 });
}


