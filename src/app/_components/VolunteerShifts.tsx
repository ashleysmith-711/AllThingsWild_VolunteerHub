import { getShiftReadableTime } from "../services/utils";
import { Shift } from "../types";

interface ShiftTableProps {
    volunteerId: number;
}

const ShiftsByUser = (props: ShiftTableProps) => {
    const { volunteerId } = props;
    // Fetch shifts for this volunteer an format to table
    return (
        <table>
            <tr>
                <th>Date</th>
                <th>Time</th>
            </tr>
            {/* {shifts.map((shift) => (
                <tr key={shift.id}>
                    <td>{shift.date}</td>
                    <td>{getShiftReadableTime(shift.time)}</td>
                </tr>
            ) }
            {/* )} */}
        </table>
    );
}

export default ShiftsByUser;