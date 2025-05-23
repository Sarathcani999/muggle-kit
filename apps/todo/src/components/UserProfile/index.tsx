interface User {
  name: string;
  email: string;
}

interface UserProfileProps {
  user?: User;
}

export function UserProfile(props: UserProfileProps) {
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