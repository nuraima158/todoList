import {useState} from 'react';
import './App.css';
import CreateToDo from './components/CreateToDo/CreateToDo'
import Header from './components/Header/Header'
import TodoContainer from './components/TodoContainer/TodoContainer';
import Todoitem from './components/Todoitem/Todoitem';

function App() {
 
  
  const arr2=[
    {title:"купить бананы", status:true,id:1},
    {title:"купить йогурт", status:true,id:2},
    {title:"купить молоко", status:false,id:3},
  ]

  // const arr2=[]

  let [arr,setArr]=useState(arr2)
  
 
 const addTodo=(newStr,value)=>{
  setArr(
    [ 
      ...arr,
      {title:newStr,status:false,id:Date.now()},
    ] 
   )
 }


  // const numberCompleted=arr.filter(a=>a.status).length

  const numberCompleted=arr.reduce((acc,item)=>(acc+item.status),0)

   const deleteTodo=(id)=>{
     setArr(arr.filter(item=>item.id!=id))
   }
  
  //  const done=(id)=>{
  //   setArr(arr.filter(item=>{
  //     if (item.id==id){
  //       item.status=!item.status
  //     }
  //     return item 
  //   }))
  //  }

  const done=(id)=>{
    const newArr=arr.map((item)=>{
      if (item.id===id){
        return {...item,status:!item.status}
      }
      return item
    })
    setArr(newArr)
  }

  let [save,setSave]=useState(arr)
  
   const saveTodo=(id,inpValue)=>{
    const newTodo=arr.map(item=>{
      if (item.id==id){
        item.title=inpValue
      }
      return item
   })
  
  setArr(newTodo)
  setSave(null)
  }
  return ( 
    <div className="App">
       <Header completed={numberCompleted} length={arr.length}/> 
       <CreateToDo addTodo={addTodo} /> 
       <TodoContainer arr={arr} deleteTodo={deleteTodo} done={done} saveTodo={saveTodo}/>
    
      
    </div>
  );
}

export default App;
