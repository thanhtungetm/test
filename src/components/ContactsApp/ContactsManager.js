import { useState } from "react";
import AddPersonForm from "./AddPersonForm";
import PeopleList from "./PeopleList";

function ContactsManager(props){
    const [contacts, setContacts] = useState(props.contacts);

    function handleAddPerson(name){
        setContacts([...contacts, name]);
    }
    return (
        <div>
            <AddPersonForm handleAddPerson={handleAddPerson} />
            <PeopleList data={contacts} />
        </div>
    );
}

export default ContactsManager;