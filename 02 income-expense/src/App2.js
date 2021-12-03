import './App2.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { useState } from 'react'

function App () {

    const [header, setHeader] = useState("Create")
    const [date, setDate] = useState()
    const [category, setCategory] = useState()
    const [amount, setAmount] = useState()

    const [transactions, setTransactions] = useState([])

    const deleteItem = (id) => {
        setTransactions(transactions.filter((data) => {
            return data[3] !== id
        }))
    }

    const calTotal = () => {
        var result = 0
        for (let i=0; i < transactions.length; i++) {
            result = result + Number(transactions[i][2])
        }
        return result
    }

    return (
    <div>
        <div className="header1">
            <div className="header2">
                <h1> My Wallet </h1>
                <h1> Total: {calTotal()} </h1>
            </div>
        </div>

        <div className="body1">
            <Router>
            <div className="body2">
                <div className="body21"> <h1> Menu </h1> </div>
                    <Link to="/create">
                        <button className="createButton"
                        onClick={() => {setHeader("Create")}}> Create </button>
                    </Link>
                    <Link to="/transaction">
                        <button className="createButton"
                        onClick={() => {setHeader("Transaction")}}> Transactions </button>
                    </Link>
                    <Link to="/income">
                        <button className="createButton"
                        onClick={() => {setHeader("Income")}}> Income </button>
                    </Link>
                    <Link to="/expense">
                        <button className="createButton"
                        onClick={() => {setHeader("Expense")}}> Expense </button>
                    </Link>

            </div>
            <div className="body3">
                <div className="body31"> <h1> {header} </h1> </div>
                <Switch>
                    <Route path="/create">
                        <div class="create1">
                            <div className="create2">
                                <p> Date: </p>
                                <p> Category: </p>
                                <p> Amount: </p>
                            </div>
                            <div className="create2">
                                <p> <input placeholder="Ex. 30/12/2020" 
                                           value={date} onInput={(e) => setDate(e.target.value)} />
                                </p> {console.log(date)}
                                <p> <input placeholder="Ex. Shopping"
                                           value={category} onInput={(e) => setCategory(e.target.value)} />
                                </p> {console.log(category)}
                                <p> <input placeholder="Ex. 300"
                                           type="number"
                                           value={amount} onInput={(e) => setAmount(e.target.value)}/>
                                </p> {console.log(amount)}
                            </div>
                        </div>
                        <div className="create3">
                            <Link to="/transaction">
                                <button className="okButton" 
                                        onClick={() => {setTransactions([...transactions, [date, category, amount, (transactions.length - 1)]])
                                                        setDate()
                                                        setCategory()
                                                        setAmount()
                                                        setHeader("Transaction")}}>
                                        OK
                                        {console.log(transactions)}
                                </button>
                            </Link>
                        </div>
                    </Route>
                    <Route path="/transaction">
                        <div>
                            {transactions.map((data) => {
                                if (data[2] > 0) {
                                    return (
                                    <div className="tx" style={{borderColor: "green"}}>
                                        <div> {data[0]} </div>
                                        <div> {data[1]} </div>
                                        <div> {data[2]} </div>
                                        <div className="close"
                                             onClick={() => {deleteItem(data[3])}}> x </div>
                                    </div>
                                    )
                                } else {
                                    return(
                                    <div className="tx" style={{borderColor: "red"}}>
                                        <div> {data[0]} </div>
                                        <div> {data[1]} </div>
                                        <div> {data[2]} </div>
                                        <div className="close"
                                             onClick={() => {deleteItem(data[3])}}> x </div>
                                    </div>
                                    )
                                }
                            })}
                        </div>
                    </Route>
                    <Route path="/income">
                        <div>
                            {transactions.map((data) => {
                                if (data[2] > 0) {
                                    return (
                                    <div className="tx" style={{borderColor: "green"}}>
                                        <div> {data[0]} </div>
                                        <div> {data[1]} </div>
                                        <div> {data[2]} </div>
                                        <div className="close"
                                             onClick={() => {deleteItem(data[3])}}> x </div>
                                    </div>
                                    )} else {
                                        return null
                                    }
                                }
                            )}
                        </div>
                    </Route>
                    <Route path="/expense">
                        <div>
                        {transactions.map((data) => {
                                if (data[2] < 0) {
                                    return (
                                    <div className="tx" style={{borderColor: "red"}}>
                                        <div> {data[0]} </div>
                                        <div> {data[1]} </div>
                                        <div> {data[2]} </div>
                                        <div className="close"
                                             onClick={() => {deleteItem(data[3])}}> x </div>
                                    </div>
                                    )} else {
                                        return null
                                    }
                                }
                            )}
                        </div>
                    </Route>
                </Switch>
            </div>
            </Router>
        </div>
    </div>
    )
}

export default App