const TodoListItem = (props) => {
  const { todoList, onRemoveItem } = props;

  return (
    <ul>
      {todoList.map((item) => (
        <li key={item.id}>
          {item.userInput}{" "}
          <button type="button" onClick={() => onRemoveItem(item.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoListItem;
