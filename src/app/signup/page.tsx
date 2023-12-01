'use client'
import styles from './Signup.module.scss';
import { ShiftTimes } from '../types';
import { Controller, useForm, SubmitHandler } from "react-hook-form"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// import { signUpForShift } from '../services/data';


type FormValues = {
  name: string
  email: string
  shiftTime: ShiftTimes
  shiftDate: Date
}

const Signup = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      shiftTime: ShiftTimes.Morning,
      shiftDate: new Date(),
    }
  })


  const processForm: SubmitHandler<FormValues> = (data) => {


    console.log('PROCESSED FORM! Heres the data:', data);
  }

  // console.log('name', watch("name")); // watch input value by passing the name of it
  // console.log('email', watch("email"));
  console.log(watch("shiftTime"));
  // console.log(watch("shiftDate"));
  console.log('errors?', errors);
  return (
    <main className="constrict-content">
      <h1 className={styles.title}>Signup Form</h1>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(processForm)}>
          <input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: "Name is required" })} />
          {errors.name?.message && <p className={styles.error}>*&nbsp;Name is required</p>}

          <input
            type="email"
            placeholder="Email"
            {...register("email")} />
          {errors.email?.message && <p className={styles.error}>*&nbsp;Email is required</p>}

          <Controller
            name="shiftDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                placeholderText="Select date"
                onChange={(date: Date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
          {errors.shiftDate && <p>{errors.shiftDate.message}</p>}
          
          <fieldset>
            <legend>Select a Shift:</legend>
            <Controller
                    name="shiftTime"
                    control={control}
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
                          <br/>
                            <input
                                {...field}
                                type="radio"
                                value="afternoon"
                                id="afternoon"
                                checked={field.value === 'afternoon'}
                            />
                            <label htmlFor="afternoon">&nbsp;Afternoon  (11am - 2pm)</label>
                            <br/>
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
