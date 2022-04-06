import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})


export class AboutComponent implements OnInit {
   me:any;
  constructor() {

   this.me = new Person ();
   this.me.name= "Kübra KÖSE";
   this.me.age= 26;
   this.me.school = 'Kocaeli Üniversitesi';
   this.me.city = 'İstanbul';
   this.me.title = 'Junior Frontend Developer';
   this.me.phone = '+905366667463';


   }


  ngOnInit(): void {
  }

}
class Person {
  name: string | undefined;
  age: number | undefined;
  school: string | undefined;
  city: string | undefined;
  title: string | undefined;
  phone: string | undefined;
}
