const init={
    list:[]
}

const TodoReducer=(state=init,action)=>{
    
    switch(action.type){

    case "Add_todo":

        const {id,data}=action.payload;
        //console.log("inside add"+data+id);
        return{
            ...state,
            list:[
            ...state.list,
            {
            id:id,
            data:data
        }
    ]}

    case "Delete_Todo":
         

        const newlist=state.list.filter((val)=>val.id !== action.id)
      
        return{...state,list:newlist}

    case "Edit_Todo":
        const foo=prompt("enter new value");
        const index = state.list.findIndex((todo) => todo.id === action.id);                                                        
        const newArray = [...state.list]; 
         newArray[index].data =  foo;
        return {...state, list: newArray }



       
    //     let foo=prompt("enter new value");
    //     console.log(foo)
    //    const newlist2=state.list.map((item)=>{
    //        let current=null;
    //         if(item.id===action.id)
    //         {
    //             current={
    //                 id:action.id,
    //                 data:foo
    //             }
    //         }
    //         //return {...state,current};
            
    //     })
    //    console.log(newlist2)
    //     return { 
    //    ...state, 
    //    list:newlist2}
    

    default: return state;
    }
}
export default TodoReducer;