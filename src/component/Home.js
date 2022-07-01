import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const Home = ({ date }) => {

    const [confirmTask, setConfirmTask] = useState({})
    const formattedDate = format(date, "PP");

    useEffect(() => {
        fetch(`http://localhost:5000/task/${formattedDate}`)
            .then(res => res.json())
            .then(data => setConfirmTask(data))
    }, [formattedDate])


    const addNewTask = event => {
        event.preventDefault()
        const morningTask = event.target.morning.value;
        const noonTask = event.target.noon.value;
        const afternoonTask = event.target.afternoon.value;
        const eveningTask = event.target.evening.value;
        const nightTask = event.target.night.value;

        const allTask = { morningTask, noonTask, afternoonTask, eveningTask, nightTask, date: formattedDate };

        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(allTask),
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data);
            })

    }



    return (
        <div className="hero lg:h-[700px] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body py-48">
                        <h2 className="card-title mx-auto">To-Do</h2>
                        <ol>
                            <li>1.{confirmTask.morningTask}</li>
                            <li>2.{confirmTask.noonTask}</li>
                            <li>3.{confirmTask.afternoonTask}</li>
                            <li>4.{confirmTask.eveningTask}</li>
                            <li>5.{confirmTask.nightTask}</li>
                        </ol>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title mx-auto font-bold">Daily Task</h2>
                            <p className='text-xl text-center'>Write Your Daily Task</p>
                            <form onSubmit={addNewTask}>
                                <input type="text" placeholder="Morning task" name='morning' className="input input-bordered w-full max-w-xs m-3" />
                                <input type="text" placeholder="Noon task" name='noon' className="input input-bordered w-full max-w-xs m-3" />
                                <input type="text" placeholder="Afternoon task" name='afternoon' className="input input-bordered w-full max-w-xs m-3" />
                                <input type="text" placeholder="Evening task" name='evening' className="input input-bordered w-full max-w-xs m-3" />
                                <input type="text" placeholder="Night task" name='night' className="input input-bordered w-full max-w-xs m-3" />
                                <input type="submit" value="Add Task" className="input w-full max-w-xs m-3 bg-primary   " />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;