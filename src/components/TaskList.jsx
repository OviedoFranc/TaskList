import {React, useContext} from 'react'
import TaskCard from './TaskCard.jsx'
import {TaskContext} from '../context/TaskContext.jsx'

function TaskList() {

  const {tasks} = useContext(TaskContext);

if (tasks.length === 0) {
       return <h1 className='text-white text-4xl font-bold text-center mt-5'>No hay tareas aun</h1>
}

  return (
    <div className='grid grid-cols-4 gap-3'>
       {tasks.map( (task) =>  (
          <TaskCard key={task.id} task={task} />
       ))
       }
    </div>
  )
}

export default TaskList