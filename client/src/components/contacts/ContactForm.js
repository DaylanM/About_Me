import { useState, useEffect } from 'react';
import { ContactConsumer } from '../../providers/ContactsProvider';

const ContactForm = ({ addContact, id, name, email, body, subject, updateContact, setEdit }) => {
  const [contact, setContact] = useState({ name: '', subject: '', email: '', body: '' })

  useEffect( () => {
    if (id) {
      setContact({ name, body, email, subject })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateContact(id, contact)
      setEdit(false)
    } else {
      addContact(contact)
    }
    setContact({ name: '', subject: '', email: '', body: '' })
  }

  return(
    <>
      <h1>{id ? "Update" : "Create"} Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          name='name'
          value={contact.name}
          onChange={(e) => setContact({...contact, name: e.target.value })}
          required
        />
        <label>Email</label>
        <input
          type='email' 
          name='email'
          value={contact.email}
          onChange={(e) => setContact({...contact, email: e.target.value })}
          required
        />
        <label>Subject</label>
        <input 
          name='subject'
          value={contact.subject}
          onChange={(e) => setContact({...contact, subject: e.target.value })}
          required
        />
        <label>Info</label>
        <input 
          name='body'
          value={contact.body}
          onChange={(e) => setContact({...contact, body: e.target.value })}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

const ConnectedContactForm = (props) => (
  <ContactConsumer>
    { value => <ContactForm {...props} {...value} />}
  </ContactConsumer>
)

export default ConnectedContactForm;