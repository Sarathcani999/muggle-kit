interface ButtonProps {
  onClick?: () => void;
  children?: any;
}

export function Button(props: ButtonProps) {
  return (
    <button onclick={props.onClick} className="btn">
      {props.children}
    </button>
  );
} 