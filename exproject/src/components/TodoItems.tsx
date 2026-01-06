import React from "react";
import { Todo } from "../types";
import { useTodoDispatch } from "../App";

interface TodoItemsProps extends Todo {}

export default function TodoItems(props: TodoItemsProps) {
  const dispatch = useTodoDispatch();
  return (
    <div>
      No.{props.id} Todo: {props.content}
      <button onClick={() => dispatch.onClickDelete(props.id)}>delete</button>
    </div>
  );
}
