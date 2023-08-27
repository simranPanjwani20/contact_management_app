import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, editContact} from '../../redux/contactsSlice';
import './style.css';

const ContactForm = (props:any) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: any) => state.contacts.contacts);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState<'active' | 'inactive'>('active');

  const handleSubmit = () => {
    const newContact = {
      firstName,
      lastName,
      status,
    };
    if (props.contactId !== undefined) {
        dispatch(editContact({ id: props.contactId, ...newContact }));
      } else {
        dispatch(addContact({   id: Date.now(), ...newContact }));
      }

    setFirstName('');
    setLastName('');
    setStatus('active');
    props.setIsFormVisible(false)
  };

  useEffect(() => {
    if (props.contactId !== undefined) {
      const contactToEdit = contacts.find((contact: any) => contact.id === props.contactId);
      if (contactToEdit) {
        setFirstName(contactToEdit.firstName);
        setLastName(contactToEdit.lastName);
        setStatus(contactToEdit.status);
      }
    }
  }, [props.contactId, contacts]);
  
  return (
    <div className="contactFormCon">
    <div className=" contactForm bg-white p-5 shadow-md rounded-lg mt-2 ml-8 mr-8">
      <h2 className="py-2 text-lg font-semibold mb-4 text-center"> {props.contactId !== undefined ? 'Edit Contact' : 'Add Contact'}</h2>
      <div className="px-10 space-y-4">
        <label className="mr-2 mb-2">
        Firstname:
      <input
          type="text"
          required={true}
          placeholder="First Name"
          className="border rounded px-3 py-2 w-full  mb-2"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        </label>
        <label  className="mr-2">
            Lastname:
        <input
          type="text"
          required={true}
          placeholder="Last Name"
          className="border rounded px-3 py-2 w-full  mb-2"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        </label>
        <div className="space-y-2">
          <div>Status:</div>
          <label className="mr-2">
            <input
              type="radio"
              value="active"
              checked={status === 'active'}
              onChange={() => setStatus('active')}
              className="mr-2"
            />
            Active
          </label>
          <label>
            <input
              type="radio"
              value="inactive"
              checked={status === 'inactive'}
              onChange={() => setStatus('inactive')}
              className="mr-2"
            />
            Inactive
          </label>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
