import React, { useRef } from "react";
import "./styles.css";

interface Props{
     todo: string;
     setTodo: React.Dispatch<React.SetStateAction<string>>;
     handleAddTodo: (e:React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {   
     
     const inputRef = useRef<HTMLInputElement>(null);
     
     return (
          <>
               <form className='input' onSubmit={(e) => {
                    handleAddTodo(e);
                    inputRef.current?.blur();
               }}>
               <input
                    ref={inputRef}
                    value={todo}
                    onChange={(e)=>setTodo(e.target.value)}
                    className="input__box"
                    type="text"
                    placeholder="Enter a Task" />
                    
               <button className="input_submit" type="submit">Add Task</button>
               </form>
          </>
  )
};

export default InputField;
