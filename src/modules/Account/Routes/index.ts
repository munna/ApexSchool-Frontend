import Profile from '../Pages/Profile'
import AccountDasboard from '../Pages/Account'
export default [
  {
    path: '/Account',
    name: 'account',
    component: AccountDasboard,
    title: 'Account Section',
    redirect: { name: 'account-profile' },
    children: [
      {
        path: 'profile',
        name: 'account-profile',
        component: Profile
      }
    //   {
    //     path: 'logout',
    //     name: 'student-dashboard',
    //     component: Dashboard
    //   }
    ]
  }
]
