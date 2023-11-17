'use client'
import { ChangeEvent, FormEvent, FormEventHandler, MouseEventHandler, useState } from 'react';
import styles from './Signup.module.scss';
import { ShiftTimes } from '../types';
import { signUpForShift } from '../services/fetchData';

const Signup = () => {
  const [name, setName] = useState<string>("");
  const [shiftTime, setShiftTime] = useState<ShiftTimes>(ShiftTimes.Morning);
  const [date, setDate] = useState<string>(new Date().toLocaleDateString('en-CA'));
  const [pending, setPending] = useState(false);

  const handleNameChange = (e: ChangeEvent) => {
    const newValue = (e.target as HTMLInputElement).value;
    setName(newValue);
  }
  const handleDateChange = (e: ChangeEvent) => {
    const newValue = (e.target as HTMLInputElement).value;
    setDate(newValue);
  }

  const handleShiftChange = (shift: ShiftTimes) => {
    const newValue = shift;
    setShiftTime(newValue);
  }

  const clearForm = () => {
    setName('');
    setDate('');
    setShiftTime(ShiftTimes.Morning);
  }

  const handleSubmit: FormEventHandler =  async (event: FormEvent) => {
    setPending(true)
    const success = await signUpForShift(name, shiftTime, date);
    success && alert('You have signed up for a shift!');
    success && clearForm();
  };

  return (
    <main className="constrict-content">
      <h1 className={styles.title}>Signup Form</h1>
      <div className={styles.container}>
        <form>
          <div>
            <input type="text" placeholder="Full Name" onChange={handleNameChange} value={name}/>
          </div>
          <input type="date" onChange={handleDateChange} value={date}/>
          <fieldset>
            <legend>Select a Shift:</legend>

            <div>
              <label>
                <input type="radio" id="morning" name="shift" value="0" checked={shiftTime === 0} onChange={() => handleShiftChange(0)} />
                &nbsp;Morning (8am - 11am)
              </label>
            </div>

            <div>
              <label>
                <input type="radio" id="afternoon" name="shift" value="1" checked={shiftTime === 1} onChange={() => handleShiftChange(1)} />
                &nbsp;Afternoon (11am - 2pm)
              </label>
            </div>

            <div>
              <label>
                <input type="radio" id="evening" name="shift" value="2" checked={shiftTime === 2} onChange={() => handleShiftChange(2)} />
                &nbsp;Evening (2pm - 5pm)
              </label>
            </div>
          </fieldset>
        </form>
        <button type="submit" onClick={handleSubmit} disabled={pending}>Add Shift</button>
      </div>

    </main>
  )
}

export default Signup;
