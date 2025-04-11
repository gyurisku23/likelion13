import styles from "./TodoList.module.css";

function TodoList({ todos, onToggle, onRemove }) {
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id} className={styles.div}>

          <input className={styles.input} type="checkbox" checked={todo.checked} onChange={() => onToggle(todo.id)}/>{todo.text}
          <button className={styles.button} onClick={() => onRemove(todo.id)}>삭제</button>

        </div>
      ))}

    </div>
  );
}

export default TodoList;
