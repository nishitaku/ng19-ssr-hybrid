import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-page',
  imports: [RouterLink],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPageComponent {
  private readonly blogService = inject(BlogService);

  blogs = this.blogService.fetchBlogs();
}
