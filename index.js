function TodoApp() {
    const [todos, setTodos] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');
  
    const addTodo = () => {
      if (inputValue.trim()) {
        setTodos([...todos, inputValue]);
        setInputValue(''); // Clear input after adding
      }
    };
  
    const handleInputChange = e => {
      setInputValue(e.target.value);
    };
  
    return (
      <div style={{ padding: '20px' }}>
        <h1>Todo List</h1>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Add a new todo'
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <button onClick={addTodo} style={{ padding: '10px' }}>
          Add Todo
        </button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} style={{ margin: '10px 0' }}>
              {todo}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  function Signup({ onSignup }) {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
  
    const handleSignup = () => {
      if (!username || !email || !password) {
        setError('All fields are required.');
      } else {
        onSignup({ username, email, password });
        setError('');
      }
    };
  
    return (
      <div style={{ padding: '20px' }}>
        <h1>Signup</h1>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <button onClick={handleSignup} style={{ padding: '10px' }}>
          Signup
        </button>
      </div>
    );
  }
  
  function Login({ onLogin }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
  
    const handleLogin = () => {
      if (!username || !password) {
        setError('Both fields are required.');
      } else {
        onLogin({ username, password });
        setError('');
      }
    };
  
    return (
      <div style={{ padding: '20px' }}>
        <h1>Login</h1>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <button onClick={handleLogin} style={{ padding: '10px' }}>
          Login
        </button>
      </div>
    );
  }
  
  function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [users, setUsers] = React.useState([]);
    const [isSignup, setIsSignup] = React.useState(true); // Initially show signup page
  
    const handleSignup = (newUser) => {
      setUsers([...users, newUser]);
      setIsSignup(false); // Go to login after signup
    };
  
    const handleLogin = ({ username, password }) => {
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        setIsLoggedIn(true);
      } else {
        alert('Invalid credentials');
      }
    };
  
    return (
      <div>
        {isLoggedIn ? (
          <TodoApp />
        ) : isSignup ? (
          <Signup onSignup={handleSignup} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
        {!isLoggedIn && (
          <button onClick={() => setIsSignup(!isSignup)} style={{ padding: '10px', marginTop: '10px' }}>
            {isSignup ? 'Already have an account? Login' : 'Don\'t have an account? Signup'}
          </button>
        )}
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
  
