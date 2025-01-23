import { useEffect, useReducer } from "react";
import todoReducer from "./todoReducer";

const todoAction = {
    delete: '[TODO] Remove todo',
    add: '[TODO] Add todo',
    toggle: '[TODO] Toggle todo'
}

const useTodo = (initialValue = []) => {

    const init = () => JSON.parse(localStorage.getItem('todos')) || [];

    const [todos, dispatch] = useReducer(todoReducer, initialValue, init);

    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos]);

    const handleNewTodo = (todo) => dispatch({ type: todoAction.add, payload: todo });
    const handleDeleteTodo = (id) => dispatch({ type: todoAction.delete, payload: id });
    const handleToggleTodo = (id) => dispatch({ type: todoAction.toggle, payload: id });

    return {
        todosCount: todos.length,
        todosPendingCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todos,
    }
}

export default useTodo;