import React, { useState } from 'react'

const AddContact = () => {
    const [contactData, setContactData] = useState({name: "", email: ""});

    const handler = (e) => {
        if (e.target.name === "name") {
            setContactData({...contactData, name: e.target.value});
        }else{
            setContactData({...contactData, email: e.target.value}); 
        }
    }

  return (
    <div>
      <form action="">
        <h2>Add Contacts</h2>
        <label htmlFor="">Enter Your Name</label><br />
        <input type="text" name='name' value={contactData.name} onChange={handler}/><br />
        <label htmlFor="">Enter Your Email</label><br />
        <input type="email" name='email' value={contactData.email} onChange={handler}/><br />

        <button className='btn'>Add Task</button>
      </form>
    </div>
  )
}

export default AddContact


