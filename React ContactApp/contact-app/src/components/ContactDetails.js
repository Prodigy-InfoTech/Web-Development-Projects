import React from "react";
import { Link, useParams  } from 'react-router-dom';
import avatar from '../assests/avatar.png'

const ContactDetails = () => {
    //console.log(props)
    const { name, email } = useParams();
  return (
    <div className="main" style={{marginTop: "150px" }}>
      <div className="ui card centered">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>

        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
      <Link to="/"><button className='ui button green center'>See Contacts List</button></Link>
      </div>
    </div>
  );
};

export default ContactDetails;