import React, { useState } from "react";

const TodoItem = ({label, done}) => {
    const [isActive, setActive] = useState(done);
    
    const ToggleClass = () => {
        setActive(!isActive);
    };

    
    return <li className={isActive ? "completed" : null} onClick={ToggleClass}>{label}</li>
}
export default TodoItem;