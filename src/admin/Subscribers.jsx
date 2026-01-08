export default function Subscribers() {
  const emails = ["test@gmail.com", "admin@realtrust.com"];

  return(
    <div>
      <h1>Newsletter Subscribers</h1>

      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>Email Address</th>
            </tr>
          </thead>

          <tbody>
            {/* Dummy data */}
            <tr>
              <td>user1@gmail.com</td>
            </tr>
            <tr>
              <td>client@example.com</td>
            </tr>
            <tr>
              <td>realtrust@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
