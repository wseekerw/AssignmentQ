import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, take } from 'rxjs';
import { PostsService } from '../posts.service';
import { Post, User, Comment } from '../posts.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss'],
})
export class ViewPostComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  public post?: Post;
  public user?: User;
  public comments?: Comment[];

  private getData() {
    this.route.paramMap.pipe(take(1)).subscribe((params) => {
      const postId = +params.get('postId')!;
      const userId = +params.get('userId')!;
      forkJoin({
        post: this.postsService.getPostById(postId),
        user: this.postsService.getUserById(userId),
        comments: this.postsService.getCommentsByPostId(postId)
      }).subscribe({
        next: (res) => {
          this.post = res.post
          this.user = res.user;
          this.comments = res.comments
        },
        error: () => {},
      });
    });
  }

  public toggleComments(post: Post) {
    post.showComments = !post.showComments;
  }

  public viewPosts() {
    this.router.navigate(['posts']);
  }
}
