// import React from 'react'
import Task from './Task'

// const tasks = [
//     {
//         id: 1,
//         text: 'Doctors Appointment',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true
//     },
//     {
//         id: 2,
//         text: 'Meeting at School',
//         day: 'Feb 6th at 1:30pm',
//         reminder: true
//     },
//     {
//         id: 3,
//         text: 'Food Shopping',
//         day: 'Feb 5th at 2:30pm',
//         reminder: false
//     }
// ]

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {/* -- Create a list using Map Array Method */}
            {/* {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))} */}

            {/* -- Create a list using component Task */}
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </>
    )
}

export default Tasks