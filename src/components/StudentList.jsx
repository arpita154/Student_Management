function StudentList({ students, onDeleteStudent }) {
  if (students.length === 0) {
    return (
      <section className="card list-card">
        <h2>Student Records</h2>
        <p>No student records available yet. Add a student to get started.</p>
      </section>
    );
  }

  return (
    <section className="card list-card">
      <h2>Student Records</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id} className="student-row">
            <div>
              <strong>{student.name}</strong>
              <p>Age: {student.age}</p>
              <p>Course: {student.course}</p>
            </div>
            <button className="delete-button" onClick={() => onDeleteStudent(student.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StudentList;
