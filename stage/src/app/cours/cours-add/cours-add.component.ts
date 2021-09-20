import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cours-add',
  templateUrl: './cours-add.component.html',
  styleUrls: ['./cours-add.component.css']
})
export class CoursAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  onFileSelected(event: any){}
done3(f:NgForm){}
}
