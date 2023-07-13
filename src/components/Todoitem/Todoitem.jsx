import css from "./Todoitem.module.css";
import { useState } from "react";

function Todoitem(props) {
 
  const [isEdit,setIsEdit]=useState(true)
  const [inpValue,setInpValue]=useState(props.title)
  const handleDel = () => {
    props.deleteTodo(props.id);
  };
  const handleCheckbox=()=>{
    props.done(props.id)
  }
  const handleChange=(e)=>{
    setInpValue(e.target.value)
  }

  const handleSave=()=>{
    props.saveTodo(props.id,inpValue)
   
    setIsEdit(true)
  }
  
  return (
    <div className={css.wrapper}>
      {isEdit ?(
      <label>
        <input type="checkbox" checked={props.status} onChange={handleCheckbox} />
        <span
          className={props.status ? css.complete : ""}
          style={!props.status ?null: { textDecoration:"line-through" }}
        >
          {props.title}
        </span>
      </label>
      ) : (
        <input  type="text" value={inpValue} onChange={handleChange}/>
       
      )}
      <div className="actions">
       {isEdit ? (<button onClick={()=>setIsEdit(false)}>Edit</button>
       ) : (
        <button onClick={handleSave}>Save</button>
       )}
        <button onClick={handleDel}>Del</button>
      </div>
    </div>
  ); 
}

export default Todoitem;
