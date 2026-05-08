import { useState } from 'react';
import './App.css';

function StudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !age.trim() || !course.trim()) return;
    onAddStudent({
      id: Date.now(),
      name: name.trim(),
      age: age.trim(),
      course: course.trim(),
    });
    setName('');
    setAge('');
    setCourse('');
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      <label>
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Age
        <input value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <label>
        Course
        <input value={course} onChange={(e) => setCourse(e.target.value)} />
      </label>
      <button type="submit">Add Student</button>
    </form>
  );
}

function StudentList({ students, onRemoveStudent }) {
  return (
    <div className="student-list">
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students yet. Add one to get started.</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              <div className="student-info">
                <strong>{student.name}</strong>
                <span>Age: {student.age}</span>
                <span>Course: {student.course}</span>
              </div>
              <button onClick={() => onRemoveStudent(student.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Ayesha', age: '16', course: 'Math' },
    { id: 2, name: 'Rohan', age: '17', course: 'Science' },
  ]);

  const addStudent = (student) => {
    setStudents((prev) => [student, ...prev]);
  };

  const removeStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <div className="app-container">
      <header>
        <h1>Student Management</h1>
        <p>Manage student records using React functional components and state.</p>
      </header>
      <div className="content">
        <StudentForm onAddStudent={addStudent} />
        <StudentList students={students} onRemoveStudent={removeStudent} />
      </div>
    </div>
  );
}

export default App;