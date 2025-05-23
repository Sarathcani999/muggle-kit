
// Simple component function
function Button(props: { onClick?: () => void; children?: any }) {
  return (
    <button onClick={props.onClick} className="btn">
      {props.children}
    </button>
  );
}

// Component with conditional rendering
function UserProfile(props: { user?: { name: string; email: string } }) {
  if (!props.user) {
    return <div>No user found</div>;
  }

  return (
    <div className="user-profile">
      <h2>{props.user.name}</h2>
      <p>{props.user.email}</p>
    </div>
  );
}

// Component with list rendering
function TodoList(props: { items: string[] }) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

// Main App component
function App() {
  const user = { name: "John Doe", email: "john@example.com" };
  const todos = ["Learn JSX", "Build virtual DOM", "Create components"];

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="app">
      <header>
        <h1>My Custom React-like Library</h1>
      </header>
      
      <main>
        {/* Fragment usage */}
        <>
          <UserProfile user={user} />
          <TodoList items={todos} />
        </>
        
        {/* Component with event handler */}
        <Button onClick={handleClick}>
          Click Me!
        </Button>
        
        {/* Conditional rendering */}
        {user && <p>Welcome, {user.name}!</p>}
        
        {/* Mixed content */}
        <div>
          Static text mixed with <strong>dynamic content</strong>
          {" and more text"}
        </div>
      </main>
    </div>
  );
}

export { App };