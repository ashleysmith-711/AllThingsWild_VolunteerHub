import { Shift, ShiftTimes } from "../types";

export const getShiftReadableTime = (shift: ShiftTimes) => {
    let shiftTime = '';
    switch(shift) {
        case 0:
            shiftTime = '8 AM - 11 AM'
            break;
        case 1:
            shiftTime = '11 AM - 2 PM';
            break;
        case 2:
            shiftTime = '2 PM - 5 PM';
            break;
        default:
            shiftTime = '8 AM - 11 AM'
      }

      return shiftTime
}

export const filterShiftsToDate = ((shifts: Shift[], date = new Date().toLocaleDateString('en-CA')) => {
    return shifts?.filter(shift => shift.date === date);
});
 