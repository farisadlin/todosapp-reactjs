import React, { useState } from 'react'
import Todo from './Todo';
//Import Components

function TodoList({ todos, setTodos, filteredTodos }) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        setTodos={setTodos}
                        todos={todos}
                        key={todo.id}
                        text={todo.text}
                        todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;