import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddContact(props) {
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    email: "",
  });

  const add = (event) => {
    event.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("Please fill in all fields");
    }
    props.addHandler(state);
    setState({ name: "", email: "" });
    //alert("Contact added Successfully");
    navigate("/");
    //console.log(state);
  };

  return (
    <>
      <div style={{ border: "2px solid red", padding: "15px", margin: "60px" }}>
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              placeholder="Your email"
              name="email"
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
          </div>
          <button className="ui button blue" onClick={add}>
            Add
          </button>
        </form>
      </div>
      <Link to="/">
        <button className="ui button green center">See Contacts List</button>
      </Link>
    </>
  );
}
