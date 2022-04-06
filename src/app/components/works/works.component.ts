import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  work1: any;
  work2: any;

  constructor() {
    this.work1 = new Works ();
    this.work1.title = 'ToDoApp';
    this.work1.link = 'https://github.com/kubraergulkose/ToDoApp-with-Angular';
    this.work1.image = 'https://user-images.githubusercontent.com/98026058/158078242-a5a39b03-39cd-47b3-9540-16121cf1526b.png';
    this.work2 = new Works ();
    this.work2.title = 'E-Commerce Website';
    this.work2.link = 'https://github.com/kubraergulkose/hafta4-odev-assignment-kubraergulkose'
    this.work2.image = 'https://user-images.githubusercontent.com/98026058/159253083-a25bd411-3781-470f-aaac-a3b54ca8cdd8.png';
   }

  ngOnInit(): void {
  }

}

class Works {
  title: string | undefined;
  link: string | undefined;
  image: string | undefined;

}

