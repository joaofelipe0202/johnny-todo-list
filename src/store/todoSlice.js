import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todosList: []
}


export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        submitTodo: (state, action) => {
            const newTodo = {
                id: new Date(),
                desc: action.payload.description,
                completed: false
            }
            state.todosList.push(newTodo);
        },
        checkTodo: (state, action) => {
            const todoIndex = state.todosList.findIndex((todo) => todo.id === action.payload.id)
            state.todosList[todoIndex].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            let notDeletedTodos = state.todosList.filter((todo) => todo.id !== action.payload.id)
            return {
                todosList: notDeletedTodos
            }
        }
    }
})

export const { 
    submitTodo, 
    checkTodo, 
    deleteTodo } = todoSlice.actions;

export const selectTodos = state => state.todos.todosList;

export default todoSlice.reducer;