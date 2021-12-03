import { message } from "antd"
import "./Transaction.css"

export const Transaction = (props) => {
    const {tx, onDeleteItem} = props
    return <div className="transaction">
    <div style={{width: "60%"}}>
      <h2 style={{margin: "0"}}> {tx.category} </h2>
      <h4 style={{margin: "0"}}> {tx.date} </h4>
    </div>

    <div>
        {tx.amount > 0 ?
        <div style={{color: "green"}}>{tx.amount}</div> : 
        <div style={{color: "red"}}>{tx.amount}</div>}
    </div>
    
    <div id="button" onClick={() => {onDeleteItem(tx.id); message.success("Delete")}}> x </div>
  </div>
}

export const mockData = [
    {
        category: "shopping",
        amount: -300,
        date: 221221
    },
    {
        category: "salary",
        amount: 15000,
        date: 221221
    }
]