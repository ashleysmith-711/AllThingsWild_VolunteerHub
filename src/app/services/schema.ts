import { z } from 'zod';
import { ShiftTimes } from '../types';

export const SignupFormSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email().min(1, { message: 'Email is required' }),
    shiftTime: z.enum([ShiftTimes.Morning, ShiftTimes.Afternoon, ShiftTimes.Evening]),
    shiftDate: z.date(),
  });
  