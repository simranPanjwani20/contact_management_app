import React, { useState } from 'react';
import './style.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import ContactForm from '../ContactForm';

const ContactCard = (props:any) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const handleEdit = () => {
        { console.log(props.firstName)}
        setIsEditing(true);
        // props.setIsFormVisible(true)
      };
    const handleDelete = () => {
        dispatch(deleteContact(props.id)); // Dispatch the deleteContact action with the contact's ID
      };
  return (
    
      isEditing? (
        <ContactForm
        // setIsFormVisible={ props.setIsFormVisible}
        contactId={props.id}
          firstName={props.firstName}
          lastName={props.lastName}
        />
      ): 
    <div className="contactCard bg-white p-4 shadow-md rounded-lg flex flex-col items-center space-y-2">
    <h2 className=" py-1 text-lg font-semibold">Name: {props.Firstname}  {props.Lastname}</h2>
    <h2 className=" py-1 text-lg font-semibold">Status: {props.status}</h2>

    <button
      className="px-8 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      onClick={handleEdit}
    >
      Edit
    </button>
    <button
      className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      onClick={handleDelete}
    >
      Delete
    </button>
    </div>
   
  
  );
};

export default ContactCard;
