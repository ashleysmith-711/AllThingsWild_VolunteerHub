'use server'

import { z } from 'zod';
import { SignupFormSchema } from '../services/schema';
import { sql } from '@vercel/postgres';
import { Shift } from '../types';
import { revalidatePath } from 'next/cache';

type ShiftSignupInputs = z.infer<typeof SignupFormSchema>

export const getTodaysShiftsAction = async () => {
    const dateFilter = new Date(new Date().setHours(0, 0, 0)).toISOString();
    const { rows } = await sql`SELECT * FROM shifts WHERE ShiftDate = ${dateFilter};`;

    return rows as Shift[];
}

export const addShiftAction = async (data: ShiftSignupInputs) => {
    const result = SignupFormSchema.safeParse(data);

    if (result.success) {
        const { name, email, shiftDate, shiftTime } = result.data;
        try {
            // make sure shift table exists, if not then create it
            await sql`
                DO $$
                BEGIN
                    -- Check if the table exists
                    IF NOT EXISTS (
                        SELECT * FROM information_schema.tables 
                        WHERE table_schema = 'public' AND table_name = 'shifts'
                    ) THEN
                        -- Create table if it does not exist
                        CREATE TABLE public.shifts (
                            Id SERIAL PRIMARY KEY, 
                            Name varchar(255), 
                            Email varchar(255), 
                            ShiftDate date, 
                            ShiftTime varchar(9)
                        );
                    END IF;
                END
                $$;
                `;

            const dateMidnight = shiftDate.setHours(0, 0, 0, 0);
            const isoDate = new Date(dateMidnight).toISOString();

            // add shift with cleaned form values
            const res = await sql`INSERT INTO shifts (Name, Email, ShiftDate, ShiftTime) VALUES (${name}, ${email}, ${isoDate}, ${shiftTime});`;
            return { success: true, data: result.data };

        } catch (error) {
            console.log('Database error occurred', error);
            return { success: false, data: result.data }
        }
    }

    if (result.error) {
        return { success: false, data: result.error.format() };
    }
};

export const cancelShiftAction = async (id: number) => {
    console.log('GOAL: cancel shift id', id);
    // add shift with cleaned form values
    try {
        const res = await sql`DELETE FROM shifts WHERE id = ${id};`;
        revalidatePath('/schedule');
        return res ? { success: true } : { success: false };
    } catch (error) {
        console.log('Database error occurred', error);
        return { success: false, error: error }
    }
}