import React from 'react'

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputStateHandler = e => {
    setInputText(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000
      }
    ])
    setInputText('')
  }

  const statusHandler = e => {
    setStatus(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div>
      <form>
        <input
          value={inputText}
          type='text'
          className='todo-input'
          onChange={inputStateHandler}
        />
        <button className='todo-button' type='submit' onClick={submitHandler}>
          <i className='fas fa-plus-square'></i>
        </button>
        <div className='select'>
          <select onClick={statusHandler} name='todos' className='filter-todo'>
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='uncompleted'>Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Form
