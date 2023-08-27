import React from 'react';
import CreateContactButton from '../createContactBtn';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className=" text-black w-60 h-full flex flex-col items-center p-5">
      <nav className="flex-grow">
        <ul className="space-y-4 mt-8">
          <li>
            <Link to="/" className="block text-center">
              Contact Page
            </Link>
          </li>
          <li>
            <Link to="/createcontact" className="block text-center">
             Create Contact
            </Link>
          </li>
          <li>
            {/* <Link to="/chart" className="block text-center">
              Chart Page
            </Link> */}
          </li> 
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
