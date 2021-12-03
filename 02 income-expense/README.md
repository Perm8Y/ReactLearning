# My 2nd project for learning React: Income-Expense Record

My script is in src/App2.js <br />
My style sheet is in src/App2.css <br />
Note: App.js and App.css are old-verion <br/>

App: reactlearning02-de0ce.firebaseapp.com

## Coding

In this project, I created:

### Proportion

I devided screen into 3 boxes:
- header box
- menu box
- display box (overflow added)

### Switch pages

- use react-router-dom: <Router> for menu and <Switch> for page screen
  
### Function to create transaction
  
- use onInput to collect user's data together with useState an setState
- gather data: date, category, amount and id as 4-index array to fill transaction
- add new transaction next to the old one as array
  
### Function to delete transaction
  
- use id of each transaction to identify a transaction that need to delete
- use filter to re-create array that not contain a transaction that need to delete
  
### Function to sum total income-expense
- use loop (let i=0; i < transactions.length; i++) for sum amount of each transaction

### Function to render transaction
- use .map to identify transactions in array and return them to render
                                             
### Function to separate income transaction and expense transaction
- use if/else to separate income/expense and render them on different color
