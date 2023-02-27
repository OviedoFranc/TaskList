import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext.jsx'

function TaskForm() {       

       const {createTask} = useContext(TaskContext);

       const [title,setTitle] = useState('')
       const [description,setDescription] = useState('')

       const handleSubmit = (e) => {
              e.preventDefault();
              createTask(title,description);   
              setTitle("");
              setDescription("");
       }

  return (
    <div className='max-w-md mx-auto'>
       <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-5">
       <h1 className='text-2xl font-bold text-white mb-3'> Add a task</h1>
              <input placeholder="Write a task" 
                     onChange={ (e) => setTitle(e.target.value)}
                     value={title}
                     className="bg-slate-500 text-black p-2 w-full rounded-md mb-3"
              /> 
              <input placeholder="Write a description" 
                     onChange={ (e) => setDescription(e.target.value) }
                     value={description}
                     className="bg-slate-500 text-black p-2 w-full rounded-md mb-3"
              />
              <button className='bg-indigo-500 px-4 py-2 rounded-sm mx-auto text-white hover:bg-indigo-200 transition-all'>Save Task</button>
       </form>
    </div>
  )
}

export default TaskForm