import "./styles.css";
import { Card, CardVariant } from "./components/Card";
import { UserList } from "./components/UserList";
import { IUser } from "./types/types";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
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
    <div className="App">
      <Card
        width={"200px"}
        height={"300px"}
        variant={CardVariant.outlined}
        onClickHandler={() => alert("click")}
        //если в типизации указано, что функци принимает параметр
        //то при передаче в props такой функции мы это указываем
        //в данном примере это реализовано с переменной number
        //имя переменной, демонстрируещей прием функцией параметра может не совпадать
        //с именем параметра в типизации пропсов:
        //тут number в компоненте Card - param
        onClickNumber={(number) => alert(number)}
      >
        <button>Button</button>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </Card>
      <UserList users={usersState} />
    </div>
  );
}
