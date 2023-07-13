import css from './CreateToDo.module.css'
import {useState} from 'react';


function CreateToDo(props){
  const [value,setValue]=useState('')
  const submit=(e)=>{
    e.preventDefault();
    props.addTodo(value)
    setValue('')
  }

   const handleChange=(e)=>{
    setValue(e.target.value)
   }
    return (
        <form onSubmit={submit} className={css.wrapper}>
            <input value={value} onChange={handleChange} type="text" placeholder="Enter some Todo"/> 
            <button>+Add</button>
        </form>
       
    )
}

export default CreateToDo