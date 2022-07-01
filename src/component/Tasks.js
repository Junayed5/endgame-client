import React, { useEffect, useState } from 'react';

const Tasks = () => {

    const [complete, setComplete] = useState({})

    useEffect(() => {
        fetch('https://enigmatic-harbor-36131.herokuapp.com/completeTask')
            .then(res => res.json())
            .then(data => setComplete(data));
    }, [])

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <h2 className="card-title">Complete Task</h2>
                <div class="card w-80 bg-primary text-primary-content">
                    <div class="card-body">
                        <h1>{complete.complete}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;