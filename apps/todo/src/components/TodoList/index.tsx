interface TodoListProps {
  items: string[];
}

export function TodoList(props: TodoListProps) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
} 