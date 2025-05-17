import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post.model';
import { Comment } from '../../models/comment.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnChanges {
  @Input() post!: Post;
  comments: Comment[] = [];

  constructor(private postService: PostService) {}

  ngOnChanges() {
    if (this.post) {
      this.comments = this.postService.getComments(this.post.id);
    }
  }
}
