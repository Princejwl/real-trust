import { Link, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import Clients from "./Clients";
import Contacts from "./Contacts";
import Subscribers from "./Subscribers";
import "./admin.css";

export default function AdminLayout() {
  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <Link to="">Dashboard</Link>
        <Link to="projects">Projects</Link>
        <Link to="clients">Clients</Link>
        <Link to="contacts">Contacts</Link>
        <Link to="subscribers">Subscribers</Link>
      </aside>

  <main className="admin-content">
  <div className="admin-page">
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="projects" element={<Projects />} />
      <Route path="clients" element={<Clients />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="subscribers" element={<Subscribers />} />
    </Routes>
  </div>
</main>

    </div>
  );
}
