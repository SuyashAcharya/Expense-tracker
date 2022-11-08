import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  // const[title , SetTitle] = useState(props.title)

  // const Clickhandler =() =>{
  //   SetTitle('updated!!!')
  //   console.log(title);
  // }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        {/* <button onClick={Clickhandler}>Title chnage</button> */}
      </div>
    </Card>
  );
}

export default ExpenseItem;