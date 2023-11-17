import styles from './Schedule.module.scss';

interface ScheduleSectionProps {
    imageUrl: string;
    imageAlt: string;
    title: string;
    volunteers: string[];
}
const DailyScheduleSection = (props: ScheduleSectionProps) => {
    const { imageUrl, imageAlt, title, volunteers } = props;
    return (
        <div className={styles.section}>
            <img src={imageUrl} alt={imageAlt} />
            <div>
                <h3>{title}</h3>
                <ol>
                    {volunteers.map((volunteer, i) => (
                        <li key={`unique-key-${i}`}>{volunteer}</li>
                    ))}
                </ol>
                {volunteers.length === 0 && <p className={styles.warn}>No volunteers signed<br/> up for this shift</p>}
            </div>
        </div>
    );
}

export default DailyScheduleSection;