import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostPageComponent {
  private readonly blogService = inject(BlogService);
  private readonly sanitizer = inject(DomSanitizer);

  id = input.required<string>();

  postResource = rxResource({
    request: () => this.id(),
    loader: ({ request: id }) =>
      this.blogService.fetchBlog(id).pipe(
        map((blog) => ({
          ...blog,
          content: this.sanitizer.bypassSecurityTrustHtml(blog.content),
        }))
      ),
  });
}
