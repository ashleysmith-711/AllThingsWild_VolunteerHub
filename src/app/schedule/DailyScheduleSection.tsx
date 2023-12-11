'use client'

import { cancelShiftAction } from '../api/_actions';
import { VolunteerWithId } from '../types';
import styles from './Schedule.module.scss';

interface ScheduleSectionProps {
    imageUrl: string;
    imageAlt: string;
    title: string;
    volunteers: VolunteerWithId[];
}
const DailyScheduleSection = (props: ScheduleSectionProps) => {
    const { imageUrl, imageAlt, title, volunteers } = props;

    const handleShiftDelete = async (id: number) => {
        const res = await cancelShiftAction(id);
        
    }
    return (
        <div className={styles.section}>
            <img src={imageUrl} alt={imageAlt} className={styles.shiftImage}/>
            <div>
                <h3>{title}</h3>
                <ol>
                    {volunteers.map((volunteer) => (
                        <li key={`unique-key-${volunteer.id}`} >
                           <span className={styles.volunteerLiContent}>
                            {volunteer.name}
                            <img src='/assets/trash-can.svg' alt='delete shift icon' title="delete shift icon" className={styles.deleteIcon} onClick={() => handleShiftDelete(volunteer.id)} />
                           </span>
                        </li>
                    ))}
                </ol>
                {volunteers.length === 0 && <p className={styles.warn}>No volunteers signed<br/> up for this shift</p>}
            </div>
        </div>
    );
}

export default DailyScheduleSection;