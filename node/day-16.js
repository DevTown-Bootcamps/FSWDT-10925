const expressStudent = require('express');
const studentApp = expressStudent();
studentApp.use(expressStudent.json());

let students = [
  { id: 1, name: 'Alice', course: 'Math', active: true },
  { id: 2, name: 'Bob', course: 'Science', active: false }
];

// 📥 GET all students
studentApp.get('/api/students', (req, res) => {
  res.json(students);
});

// 📥 GET a student by ID
studentApp.get('/api/students/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: 'Student not found' });
  res.json(student);
});

// ➕ POST - add a student
studentApp.post('/api/students', (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    course: req.body.course,
    active: req.body.active !== undefined ? req.body.active : true
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// ✏️ PUT - update student
studentApp.put('/api/students/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: 'Student not found' });
  student.name = req.body.name || student.name;
  student.course = req.body.course || student.course;
  student.active = req.body.active !== undefined ? req.body.active : student.active;
  res.json(student);
});

// ❌ DELETE - remove student
studentApp.delete('/api/students/:id', (req, res) => {
  students = students.filter(s => s.id !== parseInt(req.params.id));
  res.json({ message: 'Student deleted successfully' });
});

studentApp.listen(3001, () => console.log('🎓 Student API running at http://localhost:3001'));
