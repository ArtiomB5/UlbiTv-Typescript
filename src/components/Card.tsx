//enum - перечисление

import { useState } from "react";

//https://medium.com/@sergey.bakaev/%D0%BF%D0%B5%D1%80%D0%B5%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-enums-%D0%B2-typescript-2c264c6965c2
export enum CardVariant {
  outlined = "outlined", //тип карточки только с обводкой рамкой
  primary = "primary" //тип карточки с фоном залитым каким-то цветом
}

interface CardProps {
  width?: string;
  height?: string;

  //этим мы указываем, что ожидаем что-то из перечисления CardVariant
  variant?: CardVariant;

  //типизация функции, передаваемой в компоненту как параметр
  //типизация функции не принимающей параметры и ничего не возвращающей
  //имя параметра через который передается функция может быть произвольным,
  //не обязательно onClickHandler
  onClickHandler: () => void;

  //типизация принимающей параметром число и ничего не возвращающей
  //имя параметра этой функции может быть произвольным, не обязательно param
  onClickNumber: (param: number) => void;
}

export const Card: React.FC<CardProps> = ({
  width,
  height,
  variant,
  onClickHandler,
  onClickNumber,
  children
}) => {
  const [state, setState] = useState(0);
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid gray" : "none",
        backgroundColor: variant === CardVariant.primary ? "lightgray" : ""
      }}
    >
      <h3>Card Component</h3>

      {/* children - все, вокруг чего обернута наша компонента */}
      {children}
      <button onClick={onClickHandler}>onClickHandler</button>
      <button onClick={() => onClickNumber(state)}>onClickNumber</button>
    </div>
  );
};
