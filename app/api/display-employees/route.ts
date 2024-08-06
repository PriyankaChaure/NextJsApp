import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

 
export async function GET(request: Request)
{
  const emp = await sql`SELECT * FROM Employee;`;
  return NextResponse.json({ emp}, { status: 200 });
}

