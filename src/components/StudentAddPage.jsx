import StudentForm from './StudentForm.jsx';

function StudentAddPage({ onAddStudent }) {
  return (
    <div className="page-shell">
      <h2>Add Student Record</h2>
      <p>Use this page to enter new student details.</p>
      <StudentForm onAddStudent={onAddStudent} />
    </div>
  );
}

export default StudentAddPage;
