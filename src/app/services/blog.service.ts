import { Injectable, signal, Signal } from '@angular/core';

export interface Blog {
  id: string;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  fetchBlogs(): Signal<Blog[]> {
    return signal(this.BLOGS);
  }

  fetchBlog(id: string): Signal<Blog | null> {
    return signal(this.BLOGS.find((blog) => blog.id === id) ?? null);
  }

  fetchBlogIds(): Signal<string[]> {
    return signal(this.BLOGS.map((blog) => blog.id));
  }

  private readonly BLOGS: Blog[] = [
    {
      id: '1',
      title: 'Hello World',
      content: 'Hello World from Angular',
    },
    {
      id: '2',
      title: 'Hello Angular',
      content: 'Hello Angular from Angular',
    },
    {
      id: '3',
      title: 'Hello Angular Universal',
      content: 'Hello Angular Universal from Angular',
    },
  ];
}
