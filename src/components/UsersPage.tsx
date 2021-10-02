import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { List } from "./List";
import { UserItem } from "./UserItem";
import { IUser } from "../types/types";

interface PropsType {}

export const UsersPage: React.FC<PropsType> = () => {
  //объявление массива с указанием его типа
  //[] в типизации означает, что это массив объектов типа IUser
  //если у типизированного массива убрать какое-то из обязательных полей
  //то typescript сообщит о его отсутствии
  // const usersHC: IUser[] = [
  //   {
  //     id: 1,
  //     name: "Leanne Graham",
  //     email: "Sincere@april.biz",
  //     address: {
  //       street: "Kulas Light",
  //       city: "Gwenborough",
  //       zipcode: "92998-3874"
  //     }
  //   },
  //   {
  //     id: 2,
  //     name: "Ervin Howell",
  //     email: "Shanna@melissa.tv",
  //     address: {
  //       street: "Victor Plains",
  //       city: "Wisokyburgh",
  //       zipcode: "90566-7771"
  //     }
  //   }
  // ];

  //типизация локального состояния - <IUser[]>
  const [usersState, setUsersState] = useState<IUser[]>([]);

  const history = useHistory();

  const fetchUsers = async () => {
    try {
      //запрос на получение массива пользователей
      //с типизацией ожидаемого массива от сервера - <IUser[]>
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsersState(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users List</h2>

      <List
        items={usersState}
        renderItem={(userParam: IUser) => (
          <UserItem
            user={userParam}
            onClickHandler={(user) => history.push(`/users/${user.id}`)}
            key={userParam.id}
          />
        )}
      />
    </div>
  );
};
