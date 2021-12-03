import './App.css';
import { useState } from 'react';
import {Input, Modal, DatePicker, Select} from "antd";
import 'antd/dist/antd.css'
import {Transaction, mockData} from "./Components/Transaction"

function App() {

  const [createModalVisible, setCreateModalVisible] = useState(false);      //false=>not visible

  const [transactions, setTransactions] = useState(mockData)
  const [category, setCategory] = useState("shopping")
  const [date, setDate] = useState()
  const [amount, setAmount] = useState(0)

  const onDeleteItem = (id) => {
    setTransactions([transactions.filter((tx) => tx.id !== id)])
  }

  return (
    <div className="bg">
      
      <div className="input">
        <Input />
        <button onClick={() => setCreateModalVisible(true)}> Create </button>
      </div>

      {transactions.map((tx) => (
        <Transaction tx={tx} onDeleteItem={onDeleteItem}/>
      ))}

      <Modal title="New" visible={createModalVisible} 
      onOk={() => {
        const newTx = {
          id: transactions.length + 1,
          category,
          date,
          amount
        }
        setTransactions([...transactions, newTx])
        setCreateModalVisible(false)
      }} 
      onCancel={() => {setCreateModalVisible(false)}}>
        <div className="create">

          <Select placeholder="Select youe category" onChange={(event) =>{setCategory(event)}}>
            <Select.Option value="shopping">shopping</Select.Option>
            <Select.Option value="salary">salary</Select.Option>
          </Select>

          <DatePicker placeholder="Select your date" onChange={(event) =>{setDate(event)}}/>

          <Input placeholder="Amount"onChange={(event) =>{setAmount(event)}}/>
        </div>
      </Modal>
    </div>
  );
}

export default App;