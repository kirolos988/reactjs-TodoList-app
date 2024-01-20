import React, { Component } from "react";
import "./AddItem.css";

class AddItem extends Component {
    state = {
        task: '',
        time: '',
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        const taskLength = this.state.task.length
        const timeLength = this.state.time.length
        if(taskLength && timeLength){
            this.props.addItem(this.state)
            this.setState({task:'',time:''})
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Enter your next task..." type="text" id="task" onChange={this.handleChange} value={this.state.task}/>
                    <input type="time" id="time" onChange={this.handleChange} value={this.state.time}/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
};

export default AddItem;