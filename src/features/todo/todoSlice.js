//All  reducers 
import { createSlice, nanoid } from "@reduxjs/toolkit";
//nanoid will create unique id 
const initialState = {
    todos: [{ id: "abc", task: "demo-task", isDone: false }],

}
export const todoSlice = createSlice({
    name: "todo",
    initialState,//we can define here also
    reducers: { //there r 2 variables (state,action)
        addToDo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false
            }
            state.todos.push(newTodo);//when new task is come  it will push to the todos array
            //direct mutastion : push directely to the variable 
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
        marksAsDone: (state, action) => {
            state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    todo.isDone = true;
                }
            })
        }

    }

})

export const { addToDo, deleteTodo, marksAsDone } = todoSlice.actions;
export default todoSlice.reducer;  