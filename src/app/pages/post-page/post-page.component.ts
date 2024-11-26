import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  signal,
  Signal,
} from '@angular/core';
import { Blog, BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-post-page',
  imports: [],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostPageComponent {
  private readonly blogService = inject(BlogService);

  id = input.required<string>();
  blog: Signal<Blog | null> = signal(null);

  constructor() {
    effect(() => (this.blog = this.blogService.fetchBlog(this.id())));
  }
}
