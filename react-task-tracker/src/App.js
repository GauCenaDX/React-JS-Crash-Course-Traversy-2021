//-- This is the default code when creating a new react app
// import logo from './logo.svg';
// import './App.css';

//-- This is the default code when creating a new react app
// function App() {
//   return (    
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>

//     <div className='App'>
//       <h1>Hello From React</h1>
//     </div>
//   );
// }

//-- Import useState hook to use State
import {useState} from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  //-- Create a State [stateName, functionToUpdateState]
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Doctors Appointment',
          day: 'Feb 5th at 2:30pm',
          reminder: true
      },
      {
          id: 2,
          text: 'Meeting at School',
          day: 'Feb 6th at 1:30pm',
          reminder: true
      },
      {
          id: 3,
          text: 'Food Shopping',
          day: 'Feb 5th at 2:30pm',
          reminder: false
      }
  ])

  //-- Add Task
  const addTask = (task) => {
    // console.log(task)

    //-- create an id for each task
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //-- Delete Task function
  const deleteTask = (id) => {
    // console.log('delete', id)
  
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //-- Toggle Reminder
  const toggleReminder = (id) => {
    // console.log(id)
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className='container'>
      {/* <Header /> */}
      {/* <Header title='Hello' /> */}
      {/* <Header title={1} /> */}

      <Header
        onAdd={ () => setShowAddTask(!showAddTask) }
        showAdd={showAddTask}
      />

      {/* && is shot-way of doing ternary without else */}
      {showAddTask && <AddTask onAdd={addTask} />}

      {/* <Tasks tasks={tasks} onDelete={deleteTask} /> */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
