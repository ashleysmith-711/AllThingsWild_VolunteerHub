import { Shift, ShiftTimes, Volunteer } from '../types';

const DEV_URL = 'http://localhost:8000';
const PROD_URL = 'TODO...';

export const getVolunteers = async (): Promise<Volunteer[]> => {
    const res = await fetch(`${DEV_URL}/volunteers`);
    if (!res.ok) {
        throw new Error('Failed to fetch volunteers')
      }
    
    return res.json();
}

export const getShifts = async (): Promise<Shift[]> => {
    let url = `${DEV_URL}/all-shifts`;

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch shifts')
      } 
    return res.json();
}

export const signUpForShift = async (name: string, shiftTime: ShiftTimes, date: string /** new Date().toLocaleDateString('en-CA') */) => {
  const url = `${DEV_URL}/all-shifts`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": name,
      "shiftTime": shiftTime,
      "date": date
    })
  });

  if (!res.ok) {
    throw new Error('Failed to fetch shifts')
  }
  return "success"
}