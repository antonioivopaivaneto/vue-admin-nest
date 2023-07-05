import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '@/pages/Dashboard.vue'
import Users from '@/pages/users/Users.vue'
import rolesPage from '@/pages/roles/Roles.vue'
import rolesCreate from '@/pages/roles/rolesCreate.vue'
import RoleEdit from '@/pages/roles/RoleEdit.vue'
import UserCreate from '@/pages/users/userCreate.vue'
import UserEdit from '@/pages/users/userEdit.vue'
import Register from '@/pages/Register.vue'
import Wrapper from '@/pages/Wrapper.vue'
import Login from '@/pages/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path:'',
    component:Wrapper,
    children:[
      {path:'',component:Dashboard},
      {path:'/users',component:Users},
      {path:'/users/Create',component:UserCreate},
      {path:'/users/:id/edit',component:UserEdit},
      {path:'/roles',component:rolesPage},
      {path:'/roles/create',component:rolesCreate},
      {path:'/roles/:id/edit',component:RoleEdit},
    ]
  },
  
  {path:'/profile',component:Login},
  {path:'/login',component:Login},
  {path:'/register',component:Register},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
