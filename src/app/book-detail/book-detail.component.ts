import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  objCheckModel = {
    ID: '',
    Title: '',
    PageCount: '',
    PublishDate: '',
    Description: '',
    Excerpt: '',
  };
  _id;

  constructor(private bookService: PostService, private activeRouter: ActivatedRoute) {
  }

  ngOnInit() {
    this._id = this.activeRouter.snapshot.paramMap.get('id');
    this.bookService.getOneBook(this._id).subscribe((res: any) => {
      this.objCheckModel = res;
    });
  }

  onDeleteBook(id) {
    this.bookService.deleteBookDetail(id).subscribe((res: any) => {
      console.log(res);
    });
  }
}


