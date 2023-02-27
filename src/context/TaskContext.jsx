import {createContext, useState, useEffect} from 'react'
import {task as data} from '../data/task.js'

export const TaskContext = createContext();

export function TaskContextProvider(props) {

       const [tasks, setTasks] = useState([])

       useEffect( () => {
              setTasks(data)
       },[])


       function NewTask(title,description) {
              
              if (tasks?.length) this.id = tasks[tasks.length - 1].id + 1;
              else this.id = 1;
              this.title =  title,
              this.description = description;
              };
          
          
       function createTask(title,description){
              setTasks([...tasks,  new NewTask(title,description)]);
           }
        
       function deleteTask(id) {
            setTasks(tasks.filter( (task) => task.id !== id))
           }

  return (
       <TaskContext.Provider value={{ tasks: tasks,
                                      createTask: createTask,
                                      deleteTask: deleteTask}}>
          {props.children}
       </TaskContext.Provider>
  )
}
