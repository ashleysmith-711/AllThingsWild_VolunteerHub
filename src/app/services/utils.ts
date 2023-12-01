import { Shift, ShiftTimes } from "../types";

export const getShiftReadableTime = (shift: ShiftTimes) => {
    let shiftTime = '';
    switch(shift) {
        case 'morning':
            shiftTime = '8 AM - 11 AM'
            break;
        case 'afternoon':
            shiftTime = '11 AM - 2 PM';
            break;
        case 'evening':
            shiftTime = '2 PM - 5 PM';
            break;
        default:
            shiftTime = '8 AM - 11 AM'
      }

      return shiftTime
}

export const filterShiftsToDate = ((shifts: Shift[], date = new Date()) => {
    return shifts;
    // TODO add back filter, might have to round date to midnight
    // ?.filter(shift => shift.date === date);
});
 