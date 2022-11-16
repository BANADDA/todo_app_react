import React from 'react'

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter(e => e.id !== todo.id))
  }
  const completeHandler = () => {
    setTodos(
      todos.map(e => {
        if (e.id === todo.id) {
          return {
            ...e,
            completed: !e.completed
          }
        }
        return e
      })
    )
  }
  return (
    <div>
      <div className='todo'>
        <li className={`todo-item ${todo.completed ? 'completed' : ''} `}>
          {text}
        </li>
        <button onClick={completeHandler} className='complete-btn'>
          <i className='fas fa-check'></i>
        </button>
        <button onClick={deleteHandler} className='trash-btn'>
          <i className='fas fa-trash'></i>
        </button>
      </div>
    </div>
  )
}

export default Todo
