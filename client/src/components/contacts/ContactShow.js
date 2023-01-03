import { useState } from 'react';
import ContactForm from './ContactForm'; 

const ContactShow = ({ id, name, email, subject, body, updateContact, deleteContact }) => {
  const [editing, setEdit] = useState(false)
  
  return (
    <>
      {
        editing ?
        <>
          <ContactForm 
            id={id}
            name={name}
            subject={subject}
            email={email}
            body={body}
            updateContact={updateContact}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}> 
            Cancel
          </button>
        </>
        :
        <>
          <h1>{name}</h1>
          <h4>Email: {email}</h4>
          <h4>subject: {subject}</h4>
          <h4>Info: {body}</h4>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteContact(id)}>
            Delete
          </button>
        </>
      }    
    </>
  )
}

export default ContactShow;