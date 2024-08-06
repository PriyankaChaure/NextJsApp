import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const studentId = searchParams.get('studentId');
  const studentName = searchParams.get('studentName');
  const department = searchParams.get('department');
  const marks = searchParams.get('marks');
  
 
  try {
    if (studentId|| !studentName|| !department|| !marks) throw new Error('Enter students correct details!!');
    await sql`INSERT INTO Student(StudentId, StudentName, Department, Marks) VALUES (${studentId},${studentName}, ${department},${marks});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const dept = await sql`SELECT * FROM Student;`;
  return NextResponse.json({ dept }, { status: 200 });
}


