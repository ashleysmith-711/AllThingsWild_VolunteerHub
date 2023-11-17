
import styles from './Schedule.module.scss';
import { getShifts } from '../services/fetchData';
import { Shift, ShiftTimes, VolunteerByTime } from '../types';
import Loading from '../_components/Loading';
import { filterShiftsToDate } from '../services/utils';
import DailyScheduleSection from './DailyScheduleSection';

type TimeOptions = 'morning' | 'afternoon' | 'evening';
const getKey = (time: ShiftTimes): TimeOptions => {
    let key: TimeOptions = 'morning';
    if (time === 1) {
        key = 'afternoon';
    } else if (time === 2) {
        key = 'evening';
    }
    return key;
}

const getVolunteersByTime = (shifts: Shift[]) => {
    return shifts.reduce((acc: VolunteerByTime, shift: Shift) => {
        const key = getKey(shift.shiftTime);
        acc[key].push(shift.name)
        return acc;
    }, {
        morning: [],
        afternoon: [],
        evening: []
    })
}

const Schedule = async () => {
    const allShifts = await getShifts();
    console.log('___allShifts', allShifts)
    const shifts = filterShiftsToDate(allShifts);
    // TODO: Build a date picker to view schedule for different dates 

    const byTime = shifts ? getVolunteersByTime(shifts) : null;
    const date = new Date().toLocaleDateString('en-US');
    const heading = `Today's Schedule (${date})`;
    return (
        <main className={`constrict-content`}>
            <h1 className={styles.title}>{heading}</h1>

            {!byTime && <Loading />}
            {byTime && <div className={styles.container}>
                <DailyScheduleSection 
                    imageUrl='/img/racoons-wink.jpeg'
                    imageAlt='two racoons with one winking'
                    title='Morning (8AM - 11AM)'
                    volunteers={byTime.morning}
                    />
                <DailyScheduleSection 
                    imageUrl='/img/squirrel-min.jpeg'
                    imageAlt='...'
                    title='Afternoon (11AM - 2PM)'
                    volunteers={byTime.afternoon}
                    />
                <DailyScheduleSection 
                    imageUrl='/img/fawn-split-min.jpeg'
                    imageAlt='...'
                    title='Evening (2PM - 5PM)'
                    volunteers={byTime.evening}
                    />
            </div>
            }
        </main>
    )
}

export default Schedule;