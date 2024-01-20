import React, { Component } from 'react';
import './App.css';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';
class App extends Component{
  state = {
    items: [
      {id:Math.random(),task:"Study",time:"2:00 PM"},
      {id:Math.random(),task:"Solve problems",time:"5:00 PM"},
      {id:Math.random(),task:"Break",time:"9:00 PM"},
    ]
  }
  deleteItem = (id) => {
    // console.log(id)
    const items = this.state.items
    const index = items.findIndex(item => item.id === id)
    items.splice(index,1)
    this.setState({items})
  }
  addItem = (newItem)=>{
    const newItems = this.state.items
    newItems.push({id:Math.random(),task:newItem.task,time:newItem.time})
    // console.log(newItems)
    this.setState({items:newItems})
  }
  render(){
    // console.log(this.state.items)
    return(
      <div className="App container">
        <p className='text-center'>TODO LIST</p>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    )
  }
}

export default App