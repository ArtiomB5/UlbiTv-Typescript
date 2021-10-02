import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { IUser } from "../types/types";

interface pageAdressParamsType {
  id: string;
}

export const UserItemPage: React.FC = () => {
  const pageAdressParams = useParams<pageAdressParamsType>();

  const [userState, setUserState] = useState<IUser | null>(null);

  const history = useHistory();

  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${pageAdressParams.id}`
      );
      setUserState(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          history.push("/users");
        }}
      >
        Back
      </button>

      <h2>{userState?.name} page</h2>
      <div>
        User ID: {userState?.id}
        <br />
        User e-mail:{userState?.email}
        <h4>User address</h4>
        Zip-code: {userState?.address.zipcode}
        <br />
        City: {userState?.address.city}
        <br />
        Street: {userState?.address.street}
      </div>
    </div>
  );
};
