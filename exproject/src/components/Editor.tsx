import { useState, useContext } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";

interface EditorProps {
  onClickAdd: (text: string) => void;
}

export default function Editor() {
  const dispatch = useTodoDispatch();
  const [text, setText] = useState<string>(""); // generic type in useState
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onClickBtn = () => {
    dispatch.onClickAdd(text);
    setText("");
  };
  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickBtn}>Add</button>
    </div>
  );
}
