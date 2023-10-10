import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../api/contacts";

export default function EditContact(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    // Fetch contact data based on the 'id' parameter
    const fetchContactData = async () => {
      const response = await api.get(`/contacts/${id}`);
      const { name, email } = response.data;

      // Set the retrieved data in the component state
      setState({
        name: name || "",
        email: email || "",
      });
    };

    fetchContactData();
  }, [id]);

  const update = (event) => {
    event.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("Please fill in all fields");
    } else {
      api
        .put(`/contacts/${id}`, state)
        .then((response) => {
          // Assuming the API response returns the updated contact data
          const updatedContact = response.data;
          // Call the function to update the contact list in App.js
          props.updateContactList(updatedContact);
          alert("Contact updated Successfully");
          navigate("/");
        })
        .catch((error) => {
          console.error("Error updating contact:", error);
          // Handle the update error as needed (e.g., display an error message)
        });
    }
  };

  return (
    <>
      <div style={{ border: "2px solid red", padding: "5px", margin: "60px" }}>
        <h2>Edit Contact</h2>
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
          <button className="ui button blue" onClick={update}>
            Update
          </button>
        </form>
      </div>
      <Link to="/">
        <button className="ui button green center">See Contacts List</button>
      </Link>
    </>
  );
}
