import React, { useState } from 'react'

const AddContact = ({addContact}) => {
    const [contactData, setContactData] = useState({name: "", email: ""});

    const handler = (e) => {
        if (e.target.name === "name") {
            setContactData({...contactData, name: e.target.value});
        }else{
            setContactData({...contactData, email: e.target.value}); 
        }
    }

    const submitHandler = (e) => {
      e.preventDefault();
      if (contactData.name === "" || contactData.email === "") {
        alert("Please fill all details!")
      }else{
        addContact(contactData);
        setContactData({name: "", email: ""});
      }
    }

  return (
    <div>
      <form action="">
        <h2>Add Contacts</h2>
        <label htmlFor="">Enter Your Name</label><br />
        <input type="text" name='name' value={contactData.name} onChange={handler} required/><br />
        <label htmlFor="">Enter Your Email</label><br />
        <input type="email" name='email' value={contactData.email} onChange={handler} required/><br />

        <button className='btn' onClick={submitHandler}>Add Task</button>
      </form>
    </div>
  )
}

export default AddContact


