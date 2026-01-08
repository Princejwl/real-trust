export default function Clients() {
  return (
    <div>
      <h1>Client Management</h1>

      <div className="admin-form">
        <input type="text" placeholder="Client Name" />
        <input type="text" placeholder="Designation" />
        <textarea placeholder="Description"></textarea>
        <button>Add Client</button>
      </div>
    </div>
  );
}
