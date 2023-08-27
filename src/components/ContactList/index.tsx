import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store'; // Adjust the path as needed
import ContactCard from '../ContactCard';
import CreateContactButton from '../createContactBtn';
import './style.css'

const ContactList = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

  
  return (
    <div>
      <ul>
        {
           contacts.length>0? <><CreateContactButton isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible}/><div className='contactslists'> {!isFormVisible && contacts.map(  (contact) => (
            <ContactCard Firstname={contact.firstName} Lastname={contact.lastName} status={contact.status} id={contact.id} setIsFormVisible={setIsFormVisible}/>
           ))}</div></>: <div  className='contactList' ><CreateContactButton isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible}/></div> 
        }
        
      </ul>
    </div>
  );
};

export default ContactList;
