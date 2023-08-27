import React from 'react';
import CreateContactButton from '../../components/createContactBtn';


const AddNewContact = () => {
  
  return (
    <div>
      <ul>
        <div  className='contactList'><CreateContactButton/></div> 
      </ul>
    </div>
  );
};

export default AddNewContact;
