import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext.jsx'

function TaskCard( {task} ) {

       const {deleteTask} =  useContext(TaskContext)

  return (
       <div className='bg-slate-600 text-white p-4 rounded-r-md'>
              <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
              <p className='text-gray-200 text-sm p-3'>{task.description}</p>
              <button className='p-2 bg-red-600 px-4 rounded-md mt-4 float-right hover:bg-red-500  transition-all' onClick={ () => deleteTask(task.id) }>Eliminar Tarea</button>
       </div>
  )
}

export default TaskCard