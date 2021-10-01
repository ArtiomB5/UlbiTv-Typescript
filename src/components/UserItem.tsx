import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
}

export const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <div>
      <div style={{ padding: "15px", border: "1px solid black" }}>
        <h3>UserItem Component</h3>
        {user.id}. {user.name} lives in the city {user.address.city}, on{" "}
        {user.address.street} street.
      </div>
    </div>
  );
};
