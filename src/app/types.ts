export type Volunteer = {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export type VolunteerWithId = {
    name: string;
    id: number;
}

export type VolunteerByTime = {
    morning: VolunteerWithId[],
    afternoon: VolunteerWithId[],
    evening: VolunteerWithId[]
}

export enum ShiftTimes {
    Morning = "morning",
    Afternoon = "afternoon",
    Evening = "evening"
}

export type Shift = {
    id: number,
    name: string,
    email: string,
    shiftdate: Date,
    shifttime: ShiftTimes
}
