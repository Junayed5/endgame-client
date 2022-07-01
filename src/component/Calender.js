import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Calender = ({date, setDate}) => {

    

    const footer = <p className='font-bold p-4'>Selected date is {format(date, "PP")}</p>

    return (
        <div className='flex justify-center'>
            <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
                footer={footer}
            />
        </div>
    )
};

export default Calender;