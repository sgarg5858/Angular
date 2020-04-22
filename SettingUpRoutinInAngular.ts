app.module.ts

1.
const appRoutes:Routes=[
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'servers', component: ServersComponent}
]

In Imports Array:

2.
   RouterModule.forRoot(appRoutes)
   
   in html use this instead of component selector
   
3. <router-outlet></router-outlet>   
   
   
