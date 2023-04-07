import * as React from 'react';
interface CalendarProps {
    date: Date;
    selectedDay: Date | string;
    onChange: (v: Date) => void;
    setCurrentFocusedDate: React.Dispatch<React.SetStateAction<Date>>;
    monthAndYearAreSelectable?: boolean;
}
export default function Calender({ date, selectedDay, onChange, setCurrentFocusedDate, monthAndYearAreSelectable, }: CalendarProps): JSX.Element;
export {};
