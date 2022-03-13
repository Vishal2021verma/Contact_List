import React, { useState } from "react";

function AddNew(props) {
  const [details, setNewDetails] = useState({
    name: "",
    phoneNumber: "",
    email: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setNewDetails((prevNotes) => {
      return {
        ...prevNotes,
        [name]: value
      };
    });
  }

  function saveContact(event) {
    props.addDetails(details);
    event.preventDefault();
  }

  return (
    <div className="div-form">
      <h2>Add New Contact</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Name"
          name="name"
          value={details.name}
        />
        <br />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="1234567890"
          name="phoneNumber"
          value={details.phoneNumber}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleChange}
          type="email"
          placeholder="example@gmai.com"
          name="email"
          value={details.email}
        />
        <button onClick={saveContact}>Save</button>
      </form>
    </div>
  );
}
export default AddNew;
