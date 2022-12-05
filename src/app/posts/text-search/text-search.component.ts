import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostsService } from '../posts.service';
import { map } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Post } from '../posts.model';

@Component({
  selector: 'text-search',
  templateUrl: './text-search.component.html',
  styleUrls: ['./text-search.component.scss'],
})
export class TextSearchComponent implements OnInit {
  constructor(private postsService: PostsService) {}

  @Output() sendData: EventEmitter<Post[]> = new EventEmitter();

  public textForm = new FormGroup({
    searchText: new FormControl('', null),
  });

  ngOnInit(): void {
    this.textForm.valueChanges
      .pipe(
        map((event) => event.searchText),
        debounceTime(400)
      )
      .subscribe({
        next: (value) => {
          this.postsService.getPosts(value).subscribe((res) => {
            this.sendData.emit(res);
          });
        },
      });
  }
}
