//в данном случае обозначение дженерика буквой Т
//это устоявшеяся практика
interface ListProps<T> {
  //описание ожидаемого массива items любого типа
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export function List<T>(props: ListProps<T>) {
  return <div>{props.items.map(props.renderItem)}</div>;
}
