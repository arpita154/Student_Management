import { useState } from 'react';

function TeacherLogin({ onLogin }) {
  const [teacherName, setTeacherName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!teacherName.trim()) return;
    onLogin(teacherName.trim());
  };

  return (
    <div className="login-shell card">
      <h2>Teacher Login</h2>
      <p>Enter your name to access the student management pages.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Teacher name
          <input
            type="text"
            value={teacherName}
            onChange={(event) => setTeacherName(event.target.value)}
            placeholder="Your name"
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default TeacherLogin;
