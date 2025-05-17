import { Injectable } from '@angular/core';
import { POSTS, COMMENTS } from '../mock-data';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private index = 0;
  private limit = 10;

  getPosts(): { next: boolean, result: Post[] } {
    const result = POSTS.slice(this.index, this.index + this.limit);
    this.index += this.limit;
    return {
      result,
      next: this.index < POSTS.length
    };
  }

  getPost(id: number): Post | undefined {
    return POSTS.find(p => p.id === id);
  }

  getComments(postId: number): Comment[] {
    return COMMENTS.filter(c => c.postId === postId);
  }

  reset(): void {
    this.index = 0;
  }
}
