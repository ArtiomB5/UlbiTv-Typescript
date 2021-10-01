import { IUser } from "../types/types";
import { UserItem } from "./UserItem";

interface UserListProps {
  //[] - указывает, что users это будет массив объектов типа IUser
  users: IUser[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      <h3>UserList Component</h3>

      {users.map((user) => {
        return <UserItem user={user} />;
      })}
    </div>
  );
};
