import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = (props) => {
  const { contact, removeContact } = props;
  const contactList = contact.map((val) => {
    return (
      <div className='contactList' key={val.id}>
        <div>{val.data.name}</div>
        <div>{val.data.email}</div>
        <span onClick={() => removeContact(val.id)}><DeleteIcon /></span>
      </div>
    )
  })

  return (
    <div>
      <div className='finalList'>
        <h1>Here is Contact List</h1><br />
        {contactList}
      </div>
    </div>
  )
}

export default ContactList 
