import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-year-sel',
  templateUrl: './year-sel.component.html',
  styleUrls: ['./year-sel.component.css']
})
export class YearSelComponent implements OnInit {
  @Input() years$: Observable<number[]>;

  constructor() { }

  ngOnInit() {
  }

}
