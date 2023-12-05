
import styles from './Schedule.module.scss';
import { getShifts } from '../services/data';
import { Shift, ShiftTimes, VolunteerByTime } from '../types';
import Loading from '../_components/Loading';
import { filterShiftsToDate } from '../services/utils';
import DailyScheduleSection from './DailyScheduleSection';

const getVolunteersByTime = (shifts: Shift[]) => {
    return shifts.reduce((acc: VolunteerByTime, shift: Shift) => {
        acc[shift.shiftTime].push(shift.name)
        return acc;
    }, {
        morning: [],
        afternoon: [],
        evening: []
    })
}

const Schedule = async () => {
    // const allShifts: Shift[] = await getShifts();
    // const shifts = filterShiftsToDate(allShifts);

    // const byTime = shifts ? getVolunteersByTime(shifts) : null;
    // const date = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // const heading = `Today's Schedule (${date})`;
    return (
        <main className={`constrict-content`}>
            {/* <h1 className={styles.title}>{heading}</h1> */}
            <h3>Coming Soon...</h3>
            {/* {!byTime && <Loading />}
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
            } */}
        </main>
    )
}

export default Schedule;