import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });
  function handleContact(event) {
    var { name, value } = event.target;
    setContact((prev) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: contact.lName,
          email: contact.email,
        };
      } else if (name === "lName") {
        return {
          fName: contact.fName,
          lName: value,
          email: contact.email,
        };
      } else if (name === "email") {
        return {
          lName: contact.lName,
          fName: contact.fName,
          email: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleContact}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleContact}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleContact}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
