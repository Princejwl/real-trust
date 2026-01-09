import { useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    name: "",
    image: "",
    description: "",
  });


  return (
    <div>
      <h1>Project Management</h1>

      <div className="admin-form">
        <input placeholder="Project Name" />
        <input placeholder="Image URL" />
        <textarea placeholder="Description" />
        <button>Add Project</button>
      </div>
    </div>
  );
}
