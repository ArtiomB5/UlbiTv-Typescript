import { useRef, useState } from "react";

interface propsType {}

export const EventsExample: React.FC<propsType> = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isOver, setIsOver] = useState<boolean>(false);
  const [color, setColor] = useState<string>("red");

  //сылка типизируется с помощью дженерика, т.к. ссылка исп. с div то используем <HTMLInputElement>
  const inputRef = useRef<HTMLInputElement>(null);

  //в React происходит оборачивание обычного event в 'обертку' sinteticEvent
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const controlledClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    alert("Controlled Input Value = " + inputValue);
  };

  const uncontrolledClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    alert("Uncontrolled Input Value = " + inputRef.current?.value);
  };

  //drag and drop handlers
  const onDraghandler = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("BLUE SQUARE DRAG");
  };

  const onDropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    //предотвращаем действие браузера поумолчанию
    event.preventDefault();

    //устанавливает false, т.к. внесенный в границы красного квадрата синий был брошен и уже не находит над красным
    setIsOver(false);

    //меняет цвет квадрата с красного на фиолетовый, если синий квадрат был "брошен" на красный
    setColor("#8b00ff");
  };

  const onDragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
    //предотвращаем действие браузера поумолчанию
    event.preventDefault();

    //устанавливает false, если то, что было внесено в пределы этого квадрата было в итоге вынесено за его границы
    setIsOver(false);
  };

  const onDragOverhandler = (event: React.DragEvent<HTMLDivElement>) => {
    //предотвращаем действие браузера поумолчанию
    event.preventDefault();

    //устанавливает true, если в пределы этого квадрата перетащили что-то не отпустили
    setIsOver(true);
  };
  //drag and drop handlers

  const makeSquareRed = () => {
    setColor("red");
  };

  return (
    <div>
      <h4>Events Example</h4>
      <h5>Controlled input</h5>
      <input
        type="text"
        value={inputValue}
        onChange={onChangeHandler}
        placeholder={"Controlled"}
      />
      <button onClick={controlledClickHandler}>
        Show Controlled Input Value
      </button>

      <br />

      <h5>Uncontrolled input</h5>
      <input type="text" ref={inputRef} placeholder={"Uncontrolled"} />
      <button onClick={uncontrolledClickHandler}>
        Show Uncontrolled Input Value
      </button>

      <br />

      <div
        onDrag={onDraghandler}
        draggable
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "blue",
          margin: "20px auto"
        }}
      ></div>
      <div
        onDrop={onDropHandler}
        onDragLeave={onDragLeaveHandler}
        onDragOver={onDragOverhandler}
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: isOver ? "#8b00ff" : color,
          margin: "20px auto"
        }}
      ></div>
      <button onClick={makeSquareRed}>Make Square Red Again</button>
    </div>
  );
};
