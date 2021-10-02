import { EventsExample } from "./EventsExample";
import { Card, CardVariant } from "./Card";

interface PropsType {}

export const CardAndEE: React.FC<PropsType> = () => {
  return (
    <div>
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
      <EventsExample />
    </div>
  );
};
