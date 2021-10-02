export interface IAddress {
  street: string;
  city: string;
  zipcode: string;
}

//interface iUser будет содержать в себе описание полей,
//которые будет содержать в себе объет User
//пользователи с https://jsonplaceholder.typicode.com/users
//I переда названием в IUser сообщает нам, что это iterface
export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAddress;
}

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}
