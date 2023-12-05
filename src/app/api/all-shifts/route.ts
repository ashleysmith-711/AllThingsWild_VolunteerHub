import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    console.log('hello!!!')
    // const shifts = await sql`SELECT * FROM Shifts;`;
    // return NextResponse.json({ shifts }, { status: 200 });
  } catch (error) {
    // return NextResponse.json({ error }, { status: 500 });
  }
}