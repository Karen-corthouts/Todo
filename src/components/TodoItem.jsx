import React, { useState } from "react";

const TodoItem = ({label, done}) => {
    const [isActive, setActive] = useState(done);
    
    const ToggleClass = () => {
        console.log("before: " + isActive + " - " + done);
        setActive(!isActive);
        done = isActive;
        console.log("after: " + isActive + " - " + done);
    };

    
    return <li className={isActive ? "completed" : null} onClick={ToggleClass}>{label}</li>
}
export default TodoItem;