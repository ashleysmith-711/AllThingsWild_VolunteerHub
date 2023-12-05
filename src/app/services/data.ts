import { NextResponse } from 'next/server';
import { Shift, ShiftTimes, Volunteer } from '../types';

const DEV_URL = 'http://localhost:3000/api';
const PROD_URL = 'http://all-things-wild-volunteer-hub.vercel.app'


export const getShifts = async ()/*: Promise<Shift[]>*/ => {
  let url = `${DEV_URL}/all-shifts`;
  console.log('___url', url);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch shifts')
  }
  return res.json();
}
