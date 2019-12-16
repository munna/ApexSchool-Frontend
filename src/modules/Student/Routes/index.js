import Dashboard from '../Pages/Dashboard'
import Admission from '../Pages/Admission'
import Student from '../Pages/Student'
export default [
  {
    path: '/student',
    name: 'student',
    component: Student,
    title: 'Student',
    redirect: { name: 'student-dashboard' },
    children: [
      {
        path: 'admission',
        name: 'student-admission',
        component: Admission
      },
      {
        path: 'dashboard',
        name: 'student-dashboard',
        component: Dashboard
      }
    ]
  }
]
