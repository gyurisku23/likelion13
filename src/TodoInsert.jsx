import { useState } from 'react';
import styles from "./TodoInsert.module.css"

function TodoInsert(props){
    const[tesk,SetTodo]=useState("");
    function ReSetTodo(){
        props.onInsert(tesk);
        SetTodo("");
    }
    function handleChange(e){
        SetTodo(e.target.value);

    }
    return(
        <div>
            <input className={styles.input} type="text" placeholder="할 일을 입력해주세요" value={tesk} onChange={handleChange}/>
            <button className={styles.button} onClick={ReSetTodo}>추가</button>
        </div>

    );
}

export default TodoInsert;