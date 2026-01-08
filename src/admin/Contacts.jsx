export default function Contacts() {
  const contacts = [
    { name: "Rahul", email: "rahul@gmail.com", mobile: "9999999999", city: "Indore" },
    { name: "Amit", email: "amit@gmail.com", mobile: "8888888888", city: "Bhopal" },
  ];

  return (
    <div>
      <h1>Contact Form Responses</h1>

      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody>
            {/* Dummy data – backend baad me */}
            <tr>
              <td>Rahul Sharma</td>
              <td>rahul@gmail.com</td>
              <td>9876543210</td>
              <td>Indore</td>
            </tr>
            <tr>
              <td>Anita Verma</td>
              <td>anita@gmail.com</td>
              <td>9123456789</td>
              <td>Bhopal</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
