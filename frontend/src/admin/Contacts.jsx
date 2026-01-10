import { useEffect, useState } from "react";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://real-trust-backend-thpj.onrender.com/api/contacts")
      .then(res => res.json())
      .then(data => setContacts(data));
  }, []);

  return (
    <div>
      <h1>Contact Form Responses</h1>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(c => (
            <tr key={c.id}>
              <td>{c.fullName}</td>
              <td>{c.email}</td>
              <td>{c.mobile}</td>
              <td>{c.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
