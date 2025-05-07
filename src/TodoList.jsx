import styles from "./TodoList.module.css";

function TodoList({ todos, onToggle, onRemove }) {
  return (
    <div className={styles.div}>
      {todos.map(todo => (
        <div key={todo.id} className={styles.list}>

          <input className={styles.input} type="checkbox" checked={todo.checked} onChange={() => onToggle(todo.id)}/>
          <span className={styles.span}>{todo.text}</span>
          <button className={styles.button} onClick={() => onRemove(todo.id)}>삭제</button>
  
        </div>
      ))}

    </div>
  );
}

export default TodoList;
