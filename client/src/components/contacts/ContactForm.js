import { useState, useEffect } from 'react';
import { ContactConsumer } from '../../providers/ContactsProvider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
      
      <Form onSubmit={handleSubmit}>

        <Form.Label htmlFor="inputname">Name</Form.Label>
        <Form.Control
          name='name'
          placeholder="Name"
          value={contact.name}
          onChange={(e) => setContact({...contact, name: e.target.value })}
          required
        />

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          placeholder="Enter email"
          type='email'
          name='email'
          value={contact.email}
          onChange={(e) => setContact({...contact, email: e.target.value })}
          required 
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>


        <Form.Label htmlFor="inputsubject">Subject</Form.Label>
        <Form.Control
          name='subject'
          placeholder="Subject"
          value={contact.subject}
          onChange={(e) => setContact({...contact, subject: e.target.value })}
          required
        />


        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Information</Form.Label>
          <Form.Control 
          as="textarea" rows={3}
          name='body'
          placeholder="Information"
          value={contact.body}
          onChange={(e) => setContact({...contact, body: e.target.value })}
          required />
        </Form.Group>


        <Button type='submit' variant="primary">Submit</Button>
      </Form>
    </>
  )
}

const ConnectedContactForm = (props) => (
  <ContactConsumer>
    { value => <ContactForm {...props} {...value} />}
  </ContactConsumer>
)

export default ConnectedContactForm;