import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts-list/posts.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReferenceNameModule } from '../../shared/reference-name/reference-name.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextSearchComponent } from './text-search/text-search.component';


@NgModule({
  declarations: [
    PostsComponent,
    ViewPostComponent,
    TextSearchComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    ReferenceNameModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PostsModule { }
