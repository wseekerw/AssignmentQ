import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Post, Comment, User } from './posts.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  public getPosts(search?: string) {
    var httpParams = new HttpParams();
    if (search) {
      httpParams = httpParams.append('title_like', search);
    }
    return this.http.get<Post[]>(environment.apiUrl + 'posts', {params: httpParams});
  }

  public getUsers() {
    return this.http.get<User[]>(environment.apiUrl + 'users');
  }

  public getPostById(postId: number) {
    return this.http.get<Post>(environment.apiUrl + `posts/${postId}`);
  }

  public getCommentsByPostId(postId: number) {
    return this.http.get<Comment[]>(environment.apiUrl + `posts/${postId}/comments`);
  }

  public getUserById(userId: number) {
    return this.http.get<User>(environment.apiUrl + `users/${userId}`);
  }

  public getUserwithsPostandComments(userId: number) {
    return this.http.get<User>(environment.apiUrl + `users/${userId}`);
  }

  public getComments() {
    return this.http.get<Comment[]>(environment.apiUrl + 'comments');
  }

}
