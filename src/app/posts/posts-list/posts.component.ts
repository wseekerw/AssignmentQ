import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PostsService } from '../posts.service';
import { Post, User } from '../posts.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private postsService: PostsService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  public displayedPosts?: Post[];
  public allPosts?: Post[];
  public users?: User[];

  private getData() {
    forkJoin({
      posts: this.postsService.getPosts(),
      users: this.postsService.getUsers(),
    }).subscribe({
      next: (res) => {
        this.users = res.users;
        this.displayedPosts = res.posts;
      },

      error: () => {},
    });
  }

  public viewPost(postId: number, userId: number) {
    this.router.navigate(['posts/view', postId, userId]);
  }

  public toggleComments(post: Post) {
    if(!post.comments) {
      this.postsService
      .getCommentsByPostId(post.id)
      .subscribe({ next: (res) => {
        post.comments = res
      }, error: (err) => {
        console.log(err)
      } });
    }
    post.showComments = !post.showComments;
  }

  public onSendData(event: Post[]) {
    this.displayedPosts = event
  }

}
