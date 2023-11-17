export type Volunteer = {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export type VolunteerByTime = {
    morning: string[], // names of volunteers in this time period
    afternoon: string[],
    evening: string[]
}

export enum ShiftTimes {
    Morning,
    Afternoon,
    Evening
}

export type Shift = {
    name: string,
    date: string, // date string type??
    shiftTime: ShiftTimes
}
