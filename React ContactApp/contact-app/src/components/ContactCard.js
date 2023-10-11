import React from "react";
import { Link } from "react-router-dom";
import user from "../assests/user.png";

export default function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className="item" style={{padding:"10px" }}>
      
      <div className="content" style={{ display: 'flex', flexDirection: 'row', marginTop: '7px' }}>
      <img className="ui avatar image" src={user} alt="user" />
        <Link to={`/contact/${id}/${name}/${email}`}>
          <div className="header" style={{ fontSize:"16px", color: "#AD0C0C"}}>{name}</div>
          <div style={{ fontSize:"14px", marginTop: "4px"}}>{email}</div>
        </Link>
        <div style={{marginTop: '7px', marginLeft: "15px" }}>
          <Link to={`/edit/${id}`}>
            <i
              className="edit alternate outline icon"
              style={{ color: "#0C2CAD", marginTop: "7px", marginLeft: "10px", fontSize:"16px" }}
            ></i>
          </Link>
          <i
            className="trash alternate outline icon"
            style={{ color: "red", marginTop: "7px", marginLeft: "10px", fontSize:"16px" }}
            onClick={() => props.clickHandler(id)}
          ></i>
        </div>
      </div>
    </div>
  );
}
