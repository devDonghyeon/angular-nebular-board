import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.scss']
})
export class OnewayComponent implements OnInit {

  i: number = 1;
  str: string = 'Hello';
  flag: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  say(): string {
    return 'Hi';
  }

  clickBind(): void {
    alert('클릭 바인딩');
  }
}