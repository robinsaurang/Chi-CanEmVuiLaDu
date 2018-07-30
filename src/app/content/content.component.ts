import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public lists: any[];
  list;
  hideModal;
  objCheckModel = {
    id: null,
    Title: '',
    PageCount: null,
    PublishDate: '',
    Description: '',
    Excerpt: '',
  };
  hideModals = true;

  constructor(private postServices: PostService) {
  }

  clickSubmit() {
    if (this.objCheckModel.id < 1) {
      alert('Id PHẢI LÀ SỐ DƯƠNG');
    } else if (this.objCheckModel.Title == '') {
      alert('title không đc để trống');
    } else if (this.objCheckModel.PageCount < 1) {
      alert('PageCount PHẢI LÀ SỐ DƯƠNG');
    } else {
      this.postServices.addBook(this.objCheckModel).subscribe((data: any) => {
        console.log(data);
      });

    }

  }

  ngOnInit() {
    this.postServices.getContent().subscribe((data: any) => {
      this.lists = data;
    });
  }

}
