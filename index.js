function TodoApp() {
  const [todos, setTodos] = React.useState([])
  const [inputValue, setInputValue] = React.useState('')

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue])
      setInputValue('') // Clear input after adding
    }
  }

  const handleInputChange = e => {
    setInputValue(e.target.value)
  }

  return (
    <div style={{fontFamily: 'Roboto, sans-serif', padding: '20px'}}>
      <h1>Todo List</h1>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Add a new todo'
        style={{padding: '10px', marginRight: '10px'}}
      />
      <button onClick={addTodo} style={{padding: '10px'}}>
        Add Todo
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{margin: '10px 0'}}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  )
}

ReactDOM.render(<TodoApp />, document.getElementById('root'))
