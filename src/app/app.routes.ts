import { Routes } from '@angular/router';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/blog',
  },
  // {
  //   path: 'about',
  //   component: AboutPageComponent,
  // },
  // {
  //   path: 'profile',
  //   component: ProfilePageComponent,
  //   children: [
  //     {
  //       path: 'setting',
  //       component: SettingPageComponent,
  //     },
  //   ],
  // },
  {
    path: 'blog',
    children: [
      {
        path: '',
        component: BlogPageComponent,
      },
      {
        path: ':id',
        component: PostPageComponent,
      },
    ],
  },
];
