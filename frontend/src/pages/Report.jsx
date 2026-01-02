import { useState } from "react";

export default function Report() {
  const [form, setForm] = useState({
    animalType: "",
    location: "",
    condition: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/reports", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    setMessage(data.message || data.error);
  };

  return (
    <div>
      <h1>📋 Report an Animal</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="animalType"
          placeholder="Animal Type"
          onChange={handleChange}
        /><br /><br />

        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
        /><br /><br />

        <input
          name="condition"
          placeholder="Condition (injured / lost)"
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Submit Report</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

