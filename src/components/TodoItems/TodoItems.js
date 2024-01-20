import React from "react";
import "./TodoItems.css";

const TodoItems = (props) => {
    const { items, deleteItem } = props;
    // console.log(items)
    const itemsLength = items.length;
    // console.log(itemsLength)
    const listItems = itemsLength? (
        items.map( item => {
            return(
                <div key={item.id}>
                    <span className="task">{item.task}</span>
                    <span className="time">{item.time}</span>
                    <span className="action icon" onClick={()=>deleteItem(item.id)}>&times;</span>
                </div>
            )
        })
    ):(
        <p>There is no Tasks</p>
    )
    return(
        <div className="listItems">
            <div>
                <span className="task title">Task</span>
                <span className="time title">Starts at</span>
                <span className="action title">Done</span>
            </div>
            {listItems}
        </div>
    )
};

export default TodoItems;