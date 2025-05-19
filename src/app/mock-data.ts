import { Post } from './models/post.model';
import { Comment } from './models/comment.model';

export const POSTS: Post[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `Post Title ${i + 1}`,
  body: `This is the full content of post ${i + 1}. `.repeat(5)
}));

export const COMMENTS: Comment[] = POSTS.flatMap(post =>
  Array.from({ length: 3 }, (_, i) => ({
    id: post.id * 10 + i,
    postId: post.id,
    author: `User ${i + 1}`,
    body: `Comment ${i + 1} on post ${post.id}`
  }))
);
