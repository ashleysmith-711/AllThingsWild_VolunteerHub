'use server'

import { z }   from 'zod';
import { SignupFormSchema } from '../services/schema';
import { sql } from '@vercel/postgres';

type ShiftSignupInputs = z.infer<typeof SignupFormSchema>

export const addShift = async (data: ShiftSignupInputs) => {
    const result = SignupFormSchema.safeParse(data);

    if (result.success) {
        const { name, email, shiftDate, shiftTime } = result.data;
        
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

        // add shift with cleaned form values
        const res = await sql`INSERT INTO shifts (Name, Email, ShiftDate, ShiftTime) VALUES (${name}, ${email}, ${shiftDate.toISOString()}, ${shiftTime});`;
        return res ? { success: true, data: result.data } : { success: false, data: result.data };
    }

    if (result.error) {
        return { success: false, data: result.error.format() };
    }
};