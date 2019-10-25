import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.scss']
})
export class TwowayComponent implements OnInit {

  value: string = 'Hi';
  selectVal: string = 'one';
  checkVal: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}