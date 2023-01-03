import { useState } from "react";

const ToDoForm = ()=>{
    const[text,setText] = useState("");

    const onFormSubmit = ()=>{
        
    }

    const onInputChange = (e)=>{
        setText(e.target.value);
    }

    return(
        <form className="form" onSubmit={onFormSubmit} onChange={onInputChange}>
            <input placeholder="Enter New todo.."></input>
        </form>
    )
}
export default ToDoForm;