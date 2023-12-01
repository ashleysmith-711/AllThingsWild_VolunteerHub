import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
 interface AddShiftOptions {
  name: string;
  email: string;
  shiftDate: string;
  shiftTime: string;
 }
export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;;
  const shiftDate = formData.get('shiftDate') as string;
  const shiftTime = formData.get('shiftTime') as string;
 
  try {
    if (!name || !email) throw new Error('Name and email required');
    console.log(`___FORM DATA name:${name}, email:${email}, shiftDate:${shiftDate}, shiftTime:${shiftTime})`);
    // await sql`INSERT INTO Shifts (Name, Email, ShiftDate, ShiftTime) VALUES (${name}, ${email}, ${shiftDate}, ${shiftTime});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const shifts = await sql`SELECT * FROM Shifts;`;
  return NextResponse.json({ shifts }, { status: 200 });
} 