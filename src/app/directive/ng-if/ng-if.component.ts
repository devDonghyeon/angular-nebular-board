import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  str: string = 'hello';
  isFlag: boolean = false;
  num: number = 0;

  constructor() { }

  ngOnInit() {
  }

}