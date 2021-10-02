import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
  onClickHandler: (user: IUser) => void;
}

export const UserItem: React.FC<UserItemProps> = ({ user, onClickHandler }) => {
  return (
    <div style={{ padding: "15px", border: "1px solid black" }}>
      {user.id}. {user.name} lives in the city {user.address.city}, on{" "}
      {user.address.street} street.
      <br />
      <button
        onClick={() => {
          onClickHandler(user);
        }}
      >
        {user.name} Page
      </button>
    </div>
  );
};
