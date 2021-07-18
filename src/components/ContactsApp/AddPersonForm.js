import { useState } from "react";


function AddPersonForm(props){
    const [person,setPerson] = useState("");
    
    function handleSubmit(e) {
        if(!person==""){
            props.handleAddPerson(person);
            setPerson("");
        }
        e.preventDefault();
        
    }

    function handleChange(e) {
        setPerson(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add new contacts!" onChange={handleChange} value={person}/>
            <button type="submit">Add Contacts</button>
        </form>
    );
}
export default AddPersonForm;