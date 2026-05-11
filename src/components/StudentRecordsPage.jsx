import StudentList from './StudentList.jsx';

function StudentRecordsPage({ students, onDeleteStudent }) {
  return (
    <div className="page-shell">
      <h2>Student Records</h2>
      <p>View current student details and remove records as needed.</p>
      <StudentList students={students} onDeleteStudent={onDeleteStudent} />
    </div>
  );
}

export default StudentRecordsPage;
