export const addTodo=(AddData)=>{
    return{
        type:"Add_todo",
        payload:{
            id: new Date().getTime().toString(),
            data:AddData
        }
    }

}
export const deleteTodo=(id)=>{
    return{
        type:"Delete_Todo",
        id
    }
}
export const editTodo=(id)=>{
    return {
        type: "Edit_Todo",
        id
    }
}