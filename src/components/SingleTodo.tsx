import React, {useState} from "react";
import { Todo } from "./modal";
import {AiOutlineDelete} from "react-icons/ai";
import {FiEdit} from "react-icons/fi";
import { MdOutlineDoneOutline } from "react-icons/md";
import "./styles.css";

type Props = {
     todo: Todo;
     todos: Todo[];
     setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

     const [edit, setEdit] = useState<boolean>(false);
     const [editTodo, setEditTodo] = useState<string>(todo.todo);
     

     // complete task
     const completeTaskHandler = (id:number) => {
          setTodos(todos.map((todo)=>todo.id===id?{...todo, isDone:!todo.isDone}:todo))
     };

     // delete task
     const deleteTaskHandler = (id:number) => {
          setTodos(todos.filter((todo) => todo.id !== id));
     };
     // edit task
     const handleEdit = (e: React.FormEvent, id: number) => {
          e.preventDefault();
          console.log(id, e);
     };
     return (
          <>
               <form className="todos__single" onSubmit={(e)=>handleEdit(e, todo.id)}>
                    {
                         edit ? (
                              <input className="todos__single--text" value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} />
                         )
                         :
                         (todo.isDone ? (
                              <s className="todos__single--text">{todo.todo}</s>
                         ) :
                         (
                              <span className="todos__single--text">{todo.todo}</span>
                         ))   
                    }

                    <div>
                         <span className="icon" onClick={() => {
                              if (!edit && !todo.isDone) {
                                   setEdit(!edit)
                              }
                         }}>
                              <FiEdit />
                         </span>
                         <span className="icon" onClick={()=>deleteTaskHandler(todo.id)}>
                              <AiOutlineDelete />
                         </span>
                         <span className="icon" onClick={()=>completeTaskHandler(todo.id)} >
                              <MdOutlineDoneOutline />
                         </span>
                    </div>
               </form>
          </>
  )
};

export default SingleTodo;
