import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/about',
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    children: [
      {
        path: 'setting',
        component: SettingPageComponent,
      },
    ],
  },
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
