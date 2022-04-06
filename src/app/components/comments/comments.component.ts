import { Component, OnInit, ElementRef } from '@angular/core';
import { Model, TodoItem} from 'src/app/model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  model = new Model;
  isNameGetted = false;
  isDisplay = false;
  array = this.model.comment;

  constructor() {
  }

  ngOnInit(): void {
  }


  getItems() {
    if (this.isDisplay) {
      console.log( this.model.comment);
      return this.model.comment;

    }
    return this.model.comment.filter(item => !item.action);
  }

   addItem(value) {
    if (value != "") {
      this.model.comment.push(new TodoItem(value));
     // console.log(this.model.comment[0])
     console.log(this.model.comment[0])

    }
  }

  deleteItem (x) {
    for( let i = 0; i < this.array.length; i++){
      if ( this.array[i] === x) {
          this.array.splice(i, 1);
      }

  }


  }



  }

