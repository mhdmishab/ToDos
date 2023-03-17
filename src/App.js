import './App.css';
import { useEffect, useState } from 'react';
import Myalert from "./alert"
// import swal from 'sweetalert2';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const currentDate = new Date(); // create a new date object with the current date and time
  const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(currentDate); // get the day name from the date object

  const [ToDos,setToDOs]=useState([]);
  const [Todo,setTodo]=useState('');
  const [myalert,setMyalert]=useState(false);


  const myStyle = {
    color: 'red',
    textDecoration: 'line-through'
  }

  const handleAddTodo=()=>{
    if(Todo.trim()===""){
      setMyalert(true)
      return;
    }

    const newTodo={
      id:Date.now(),
      text:Todo,
      status:false
    };

    setToDOs([...ToDos,newTodo]);
    setTodo('');
  }

  useEffect(()=> {
    setTimeout(() => {
      myalert && setMyalert(false);
    }, 2500);
  },[myalert])


  return (
    

    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's {dayName} 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={Todo} onChange={(e)=>{setTodo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />
      <i onClick={handleAddTodo} className="fas fa-plus"></i>
    </div>

  {ToDos.map((obj)=>{
    return(
    <div className="todos">
      <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
            console.log(e.target.checked);
            console.log(obj);
            setToDOs(ToDos.filter((obj2)=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked;
                
              }
              return obj2; 
            }))
            
          }}  value={obj.status} type="checkbox" name="" id="" />
          {
            obj.status ?  <p style={myStyle}>{obj.text}</p> :  <p>{obj.text}</p>
          }
        </div>
        
   
        <div className="right">
          <i onClick={()=>{setToDOs(ToDos.filter((obj3)=>{
            return (obj3.id !== obj.id)
          }))}} className="fas fa-times"></i>
        </div>
      </div>
    </div>
    )
    })
    
  }
  <div>
      {myalert && <Myalert />}
  </div>
  
  </div>
  

  
   

  )
}

export default App;
