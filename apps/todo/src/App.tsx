import { Button } from './components/Button';
import { UserProfile } from './components/UserProfile';
import { TodoList } from './components/TodoList';

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
          Click Meh!
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