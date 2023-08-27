import React, { useState } from 'react';
import ContactForm from '../ContactForm';

const CreateContactButton= (props:any) => {
  console.log(props)
  const toggleFormVisibility = () => {
    props?.setIsFormVisible(!props?.isFormVisible);
  };
  
  return (
    <div>
      {props?.isFormVisible ? <ContactForm setIsFormVisible={props.setIsFormVisible} isFormVisible={props.isFormVisible} /> :<button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 m-2"
        onClick={toggleFormVisibility}
      >
        Create Contact
      </button>}
    </div>
  );
};

export default CreateContactButton;
