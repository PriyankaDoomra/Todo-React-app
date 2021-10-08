import React, { useState } from 'react';
import './Todo.css';
import { addTodo,deleteTodo,editTodo } from '../action/index';
import { useSelector,useDispatch } from 'react-redux';

const Todo=()=>{
    const [inputtext,setinputtext]=useState("");
    const dispatch=useDispatch();
    const getlist=useSelector((state)=>state.TodoReducer.list)
    console.log("the list get is"+getlist.length)
return(
<div class ="userUi">
    <div>
    <h1>My To-Do List</h1>
   
    <input type="text"   placeholder="enter your tasks..." value={inputtext}  onChange={(event)=>setinputtext(event.target.value)}/> 
    <br/>
    <button onClick={()=>dispatch(addTodo(inputtext))}> add task</button>
   </div>
    <div> 
        
        
            <table class="center">
        {    getlist.map((item,index)=>{
                return(
                <tr>
                    <td>{item.data}</td>
                    
                    <td class="userUi"><button onClick={()=>dispatch(deleteTodo(item.id))}>Delete</button></td>
                    <td><button onClick={()=>dispatch(editTodo(item.id))}>Edit</button></td>
                </tr>
                );
                                    console.log(item.data)

            })}
            </table>
        
    </div>
</div>
);

}
export default Todo;