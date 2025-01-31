import ExpenseDate from "./ExpenseDate.jsx";
import Card from "../UI/Card.jsx";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {
  const { title, price, date } = props.data;
  const [newTitle, setTitle] = useState(title)

  const clickHandler = () => {
    console.log('Clicked')
    setTitle(`Update by click ${newTitle}`)
    console.log(newTitle)
  }

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{price}</div>
      </div>
      <button onClick={clickHandler}>Click me</button>
    </Card></li>
  );
};
export default ExpenseItem;
