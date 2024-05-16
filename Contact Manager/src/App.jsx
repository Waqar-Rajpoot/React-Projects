import React, { useState } from "react"
import Header from "./Components/Header"
import ContactList from "./Components/ContactList"
import AddContact from "./Components/AddContact"
import uuid4 from 'uuid4';

function App() {

  const [contact, setContact] = useState([]);

  const addContact = (data) => {
    setContact([...contact, {id: uuid4(), data}])
  }

  const removeContact = (id) => {
    const updatedList = contact.filter((val) => {
      return val.id!== id;
    })
    setContact(updatedList)
  }
  return (
    <>
    <Header />
    <AddContact addContact = {addContact}/>
    <ContactList contact={contact} removeContact={removeContact}/>
      
    </>
  )
}

export default App
