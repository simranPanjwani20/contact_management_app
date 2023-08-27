import React from 'react';
import CreateContactButton from '../../components/createContactBtn';
import ContactList from '../../components/ContactList';


const AllContacts = () => {
  
  return (
    <div>
      <ul>
        <ContactList/>
      </ul>
    </div>
  );
};

export default AllContacts;
