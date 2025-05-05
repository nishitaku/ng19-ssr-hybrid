import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'blog',
      },
      {
        path: 'about',
        component: AboutPageComponent,
      },
      {
        path: 'profile',
        component: ProfilePageComponent,
      },
      {
        path: 'setting',
        canActivate: [AuthGuard],
        component: SettingPageComponent,
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
    ],
  },
];
