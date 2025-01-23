import ExpenseDate from "./ExpenseDate.jsx";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { title, price, date } = props.data;

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{price}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
