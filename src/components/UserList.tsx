import { IUser } from "../types/types";
import { UserItem } from "./UserItem";
import { useHistory } from "react-router-dom";

interface UserListProps {
  //[] - указывает, что users это будет массив объектов типа IUser
  users: IUser[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  const history = useHistory();

  return (
    <div>
      <h3>UserList Component</h3>

      {users.map((user) => {
        return (
          <UserItem
            user={user}
            onClickHandler={(user) => history.push(`/users/${user.id}`)}
            key={user.id}
          />
        );
      })}
    </div>
  );
};
