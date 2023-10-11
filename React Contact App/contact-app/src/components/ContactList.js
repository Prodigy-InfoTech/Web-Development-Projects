import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

export default function ContactList(props) {
  // Create a ref for the input element
  const inputEl = useRef("");

  const deletecontactHandler = (id) => {
    props.getContactId(id);
    alert(id);
  };

  const renderList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deletecontactHandler}
        key={contact.id}
      ></ContactCard>
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <div
      className="main"
      style={{ marginTop: "95px", border: "1px black solid", padding: "12px" }}
    >
      <div
        style={{
          padding: "6px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "#0C31AD" }}>Contact list</h2>
        <div>
          <Link to="/add">
            <button className="ui button blue">Add Contact</button>
          </Link>
        </div>
        <div className="ui search">
          <div className="ui icon input">
            <input
              ref={inputEl}
              placeholder="Search Contacts"
              type="text"
              className="promt"
              value={props.term}
              onChange={getSearchTerm}
            />
            <i className="search icon"></i>
          </div>
        </div>
      </div>
      <div className="ui celled list">{renderList}</div>
    </div>
  );
}

