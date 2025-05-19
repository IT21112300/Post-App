import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { PostCardComponent } from '../post-card/post-card.component';
import { PostDetailComponent } from '../post-detail/post-detail.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, PostCardComponent, PostDetailComponent],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts: Post[] = [];
  selectedPost: Post | null = null;
  hasMore: boolean = true;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    const response = this.postService.getPosts();
    this.posts = [...this.posts, ...response.result];
    this.hasMore = response.next;
  }

  selectPost(post: Post) {
    this.selectedPost = post;
  }
  
  closeModal() {
    this.selectedPost = null;
  }
}
