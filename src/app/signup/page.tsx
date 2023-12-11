'use client'
import styles from './Signup.module.scss';
import { ShiftTimes } from '../types';
import { Controller, useForm, SubmitHandler } from "react-hook-form"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod';
import { SignupFormSchema } from '../services/schema';
import { useState } from 'react';
import { addShiftAction } from '../api/_actions';
import toast from 'react-hot-toast';

type ShiftSignupInputs = z.infer<typeof SignupFormSchema>

const Signup = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ShiftSignupInputs>({
    defaultValues: {
      name: '',
      email: '',
      shiftTime: ShiftTimes.Morning,
      shiftDate: new Date(),
    },
    resolver: zodResolver(SignupFormSchema)
  })

  const processForm: SubmitHandler<ShiftSignupInputs> = async (data) => {
    const result = await addShiftAction(data);
    if (result?.success) {
      const readableDate = new Date(data.shiftDate).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
      toast(`${data.name} is scheduled to volunteer on ${readableDate}`);
      reset();
    }
  }

  return (
    <main className="constrict-content">
      <h1 className={styles.title}>Signup Form</h1>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(processForm)}>
          <input
            type="text"
            placeholder="Full Name"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name")} />
          {errors.name?.message && <p className={styles.error}>*&nbsp;Name is required</p>}

          <input
            type="email"
            placeholder="Email"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email")} />
          {errors.email?.message && <p className={styles.error}>*&nbsp;Email is required</p>}

          <Controller
            control={control}
            name="shiftDate"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <DatePicker
                placeholderText="Select date"
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
              />
            )}
          />
          {errors.shiftDate && <p>{errors.shiftDate.message}</p>}

          <fieldset >
            <legend>Select a Shift:</legend>
            <Controller
              control={control}
              name="shiftTime"
              defaultValue={ShiftTimes.Morning}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="radio"
                    value="morning"
                    id="morning"
                    checked={field.value === 'morning'}
                  />
                  <label htmlFor="morning">&nbsp;Morning (8am - 11am)</label>
                  <br />
                  <input
                    {...field}
                    type="radio"
                    value="afternoon"
                    id="afternoon"
                    checked={field.value === 'afternoon'}
                  />
                  <label htmlFor="afternoon">&nbsp;Afternoon  (11am - 2pm)</label>
                  <br />
                  <input
                    {...field}
                    type="radio"
                    value="evening"
                    id="evening"
                    checked={field.value === 'evening'}
                  />
                  <label htmlFor="evening">&nbsp;Evening (2pm - 5pm)</label>
                </div>
              )}
            />
          </fieldset>

          <input type="submit" className={`fake-button ${Object.keys(errors).length > 0 ? styles.disabledBtn : ''}`} />
        </form>
      </div>

    </main>
  )
}

export default Signup;
