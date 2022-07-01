import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const ToDo = ({ date }) => {

    const [confirmTask, setConfirmTask] = useState({})
    const formattedDate = format(date, "PP");

    useEffect(() => {
        fetch(`https://enigmatic-harbor-36131.herokuapp.com/task/${formattedDate}`)
            .then(res => res.json())
            .then(data => setConfirmTask(data))
    }, [formattedDate])

    const confirmSubmit = event => {
        const change = event.target.value;
        // const complete = {change}
        // console.log(complete);

        fetch('https://enigmatic-harbor-36131.herokuapp.com/completeTask', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({change: change}),
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data);
            })
    }

    return (
        <div className='flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mx-auto">To-Do</h2>
                    <div className='inline-block'>
                        <form>
                            <input type="checkbox" id="morning" name="fav_language" value={confirmTask.morningTask} className='m-4' onChange={confirmSubmit}/>
                            <label htmlFor="morning">{confirmTask.morningTask}</label><br />
                            <input type="checkbox" id="noon" name="fav_language" value={confirmTask.noonTask} className='m-4' onChange={confirmSubmit}/>
                            <label htmlFor="noon">{confirmTask.noonTask}</label><br />
                            <input type="checkbox" id="afternoon" name="fav_language" value={confirmTask.afternoonTask} className='m-4' onChange={confirmSubmit}/>
                            <label htmlFor="afternoon">{confirmTask.afternoonTask}</label><br />
                            <input type="checkbox" id="evening" name="fav_language" value={confirmTask.eveningTask} className='m-4' onChange={confirmSubmit}/>
                            <label htmlFor="evening">{confirmTask.eveningTask}</label><br />
                            <input type="checkbox" id="night" name="fav_language" value={confirmTask.nightTask} className='m-4' onChange={confirmSubmit}/>
                            <label htmlFor="night">{confirmTask.nightTask}</label><br />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDo;