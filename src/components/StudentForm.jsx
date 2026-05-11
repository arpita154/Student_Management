import { useState } from 'react';

function StudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !age.trim() || !course.trim()) {
      return;
    }

    onAddStudent({ name: name.trim(), age: age.trim(), course: course.trim() });
    setName('');
    setAge('');
    setCourse('');
  };

  return (
    <section className="card form-card">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Student name"
          />
        </label>

        <label>
          Age
          <input
            type="number"
            min="1"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            placeholder="Student age"
          />
        </label>

        <label>
          Course
          <input
            type="text"
            value={course}
            onChange={(event) => setCourse(event.target.value)}
            placeholder="Course name"
          />
        </label>

        <button type="submit">Add Student</button>
      </form>
    </section>
  );
}

export default StudentForm;
