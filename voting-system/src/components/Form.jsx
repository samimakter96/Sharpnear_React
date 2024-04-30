import React, { useState } from 'react';
import useVoting from '../hooks/useVoting';

function Form() {
  const { handleFormSubmit, totalVotes } = useVoting();
  const [studentName, setStudentName] = useState('');
  const [monitor, setMonitor] = useState('samim');
  const [showForm, setShowForm] = useState(false); // State to manage form visibility

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(studentName, monitor);
    setStudentName('');
  };

  return (
    <div>
      <h1>Class Monitor Vote</h1>
      <p>Total Votes: {totalVotes}</p>
      {/* Show the "Add Vote" button only if the form is not already visible */}
      {!showForm && <button onClick={() => setShowForm(true)}>Add Vote</button>}
      {/* Show the form when the "Add Vote" button is clicked */}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            id="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="monitor">Choose Monitor:</label>
          <select
            name="monitor"
            id="monitor"
            value={monitor}
            onChange={(e) => setMonitor(e.target.value)}
          >
            <option value="samim">Samim</option>
            <option value="kartik">Kartik</option>
            <option value="aman">Aman</option>
          </select>

          <button type="submit">Vote</button>
          {/* Add a button to cancel adding a vote */}
          <button onClick={() => setShowForm(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
}

export default Form;
