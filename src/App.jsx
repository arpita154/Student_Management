import { useState } from 'react';
import TeacherLogin from './components/TeacherLogin.jsx';
import StudentAddPage from './components/StudentAddPage.jsx';
import StudentRecordsPage from './components/StudentRecordsPage.jsx';

const initialStudents = [
  { id: 1, name: 'Aarav', age: 16, course: 'Mathematics' },
  { id: 2, name: 'Nisha', age: 15, course: 'Science' },
  { id: 3, name: 'Rohan', age: 17, course: 'History' },
];

function App() {
  const [page, setPage] = useState('login');
  const [teacher, setTeacher] = useState('');
  const [students, setStudents] = useState(initialStudents);

  const handleLogin = (teacherName) => {
    setTeacher(teacherName);
    setPage('records');
  };

  const addStudent = (student) => {
    setStudents((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: student.name,
        age: Number(student.age),
        course: student.course,
      },
    ]);
    setPage('records');
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const handleLogout = () => {
    setTeacher('');
    setPage('login');
  };

  return (
    <div className="app-shell">
      <header>
        <h1>Student Management</h1>
        <p>Teacher access only: add student records and view student details.</p>
      </header>

      <main>
        {page === 'login' ? (
          <TeacherLogin onLogin={handleLogin} />
        ) : (
          <div>
            <div className="page-toolbar">
              <span>Welcome, {teacher}</span>
              <div className="toolbar-actions">
                <button onClick={() => setPage('records')}>Student Records</button>
                <button onClick={() => setPage('add')} className="primary">
                  Add Student
                </button>
                <button onClick={handleLogout} className="secondary">
                  Logout
                </button>
              </div>
            </div>

            {page === 'add' ? (
              <StudentAddPage onAddStudent={addStudent} />
            ) : (
              <StudentRecordsPage students={students} onDeleteStudent={deleteStudent} />
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
