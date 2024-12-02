import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Blog {
  id: string;
  title: string;
  content: string;
}

export interface MicroCMSGetBlogsResponse {
  contents: Blog[];
  totalCount: number;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private readonly httpClient = inject(HttpClient);
  private readonly microCMSEndpoint = 'https://cbqpxoq94o.microcms.io/api/v1';
  private readonly microCMSApiKey = '9fnBIKfjA7TPI1CZxeRiPAeChtiNo3phcyPW';

  private readonly headers = new HttpHeaders({
    'X-MICROCMS-API-KEY': this.microCMSApiKey,
  });

  fetchBlogs(): Observable<MicroCMSGetBlogsResponse> {
    return this.httpClient.get<MicroCMSGetBlogsResponse>(
      `${this.microCMSEndpoint}/blogs`,
      {
        headers: this.headers,
      }
    );
  }

  fetchBlog(id: string): Observable<Blog> {
    return this.httpClient.get<Blog>(`${this.microCMSEndpoint}/blogs/${id}`, {
      headers: this.headers,
    });
  }

  fetchBlogIds(): Observable<string[]> {
    return this.fetchBlogs().pipe(
      map((response) => response.contents.map((blog) => blog.id))
    );
  }
}
